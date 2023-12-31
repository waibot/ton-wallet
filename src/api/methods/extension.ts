import extension from '../../lib/webextension-polyfill';

import type { OnApiUpdate } from '../types';

import { PROXY_HOSTS } from '../../config';
import { sample } from '../../util/random';
import { updateDapps } from '../dappMethods';
import { IS_FIREFOX_EXTENSION } from '../environment';
import { storage } from '../storages';

type ProxyType = 'http' | 'https' | 'socks' | 'socks5';

type Proxy = {
  type: ProxyType;
  host: string;
  port: string;
};

type FirefoxProxyInfo = Proxy & {
  username?: string;
  password?: string;
  proxyDNS?: boolean;
  failoverTimeout?: number;
  proxyAuthorizationHeader?: string;
  connectionIsolationKey?: string;
};

const proxies: Proxy[] = (PROXY_HOSTS ?? '').split(' ').map(((hostWithPort) => {
  const [host, port] = hostWithPort.split(':');
  return { type: 'http', host, port };
}));
const proxy = sample(proxies);

// eslint-disable-next-line max-len
const PROXY_PAC_SCRIPT = `function FindProxyForURL(url, host) {
  return host.endsWith('.ton') || host.endsWith('.adnl') || host.endsWith('.bag')
    ? 'PROXY ${proxy.host}:${proxy.port}'
    : 'DIRECT';
}`;

let onUpdate: OnApiUpdate;
let isProxyEnabled = false;

export async function initExtension(_onUpdate: OnApiUpdate) {
  onUpdate = _onUpdate;

  const isTonProxyEnabled = await storage.getItem('isTonProxyEnabled');
  doProxy(isTonProxyEnabled);

  const isDeeplinkHookEnabled = await storage.getItem('isDeeplinkHookEnabled');
  doDeeplinkHook(isDeeplinkHookEnabled);
}

export function setupDefaultExtensionFeatures() {
  doDeeplinkHook(true);
  onUpdate({
    type: 'updateDeeplinkHookState',
    isEnabled: Boolean(true),
  });
}

export async function clearExtensionFeatures() {
  doProxy(false);
  doMagic(false);
  doDeeplinkHook(false);

  await Promise.all([
    storage.removeItem('isTonMagicEnabled'),
    storage.removeItem('isTonProxyEnabled'),
    storage.removeItem('isDeeplinkHookEnabled'),
    storage.removeItem('dapps'),
  ]);
}

export function doProxy(isEnabled: boolean) {
  if (!PROXY_HOSTS) {
    return;
  }

  if (isProxyEnabled === isEnabled) {
    return;
  }

  isProxyEnabled = isEnabled;
  void storage.setItem('isTonProxyEnabled', isEnabled);

  if (IS_FIREFOX_EXTENSION) {
    if (isEnabled) {
      extension.proxy.onRequest.addListener(firefoxOnRequest, {
        urls: ['*://*.ton/*', '*://*.adnl/*', '*://*.bag/*'],
      });
    } else {
      extension.proxy.onRequest.removeListener(firefoxOnRequest);
    }
  } else if (isEnabled) {
    void extension.proxy.settings.set({
      scope: 'regular',
      value: {
        mode: 'pac_script',
        pacScript: {
          data: PROXY_PAC_SCRIPT,
        },
      },
    });
  } else {
    void extension.proxy.settings.clear({
      scope: 'regular',
    });
  }
}

function firefoxOnRequest(): FirefoxProxyInfo | FirefoxProxyInfo[] {
  return proxies;
}

export function doMagic(isEnabled: boolean) {
  void storage.setItem('isTonMagicEnabled', isEnabled);

  updateDapps({
    type: 'updateTonMagic',
    isEnabled,
  });
}

export function doDeeplinkHook(isEnabled: boolean) {
  void storage.setItem('isDeeplinkHookEnabled', isEnabled);

  updateDapps({
    type: 'updateDeeplinkHook',
    isEnabled,
  });
}
