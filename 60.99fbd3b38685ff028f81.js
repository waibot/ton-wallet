/*! For license information please see 60.99fbd3b38685ff028f81.js.LICENSE.txt */
(()=>{var e={89412:function(e,t){var r,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=function(e){"use strict";var t;if(null!==(t=globalThis.chrome)&&void 0!==t&&null!==(t=t.runtime)&&void 0!==t&&t.id)if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const t="The message port closed before a response was received.",r=e=>{const r={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(r).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e){super(arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(t,r)=>function(){for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];e.runtime.lastError?t.reject(new Error(e.runtime.lastError.message)):r.singleCallbackArg||a.length<=1&&!1!==r.singleCallbackArg?t.resolve(a[0]):t.resolve(a)},n=e=>1==e?"argument":"arguments",i=(e,t,r)=>new Proxy(t,{apply:(t,s,a)=>r.call(s,e,...a)});let o=Function.call.bind(Object.prototype.hasOwnProperty);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=Object.create(null),g={has:(t,r)=>r in e||r in s,get(g,m,c){if(m in s)return s[m];if(!(m in e))return;let d=e[m];if("function"==typeof d)if("function"==typeof t[m])d=i(e,e[m],t[m]);else if(o(r,m)){let t=((e,t)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(i.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${n(t.minArgs)} for ${e}(), got ${i.length}`);if(i.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${n(t.maxArgs)} for ${e}(), got ${i.length}`);return new Promise(((s,n)=>{if(t.fallbackToNoCallback)try{r[e](...i,a({resolve:s,reject:n},t))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),r[e](...i),t.fallbackToNoCallback=!1,t.noCallback=!0,s()}else t.noCallback?(r[e](...i),s()):r[e](...i,a({resolve:s,reject:n},t))}))})(m,r[m]);d=i(e,e[m],t)}else d=d.bind(e);else if("object"==typeof d&&null!==d&&(o(t,m)||o(r,m)))d=l(d,t[m],r[m]);else{if(!o(r,"*"))return Object.defineProperty(s,m,{configurable:!0,enumerable:!0,get:()=>e[m],set(t){e[m]=t}}),d;d=l(d,t[m],r["*"])}return s[m]=d,d},set:(t,r,a,n)=>(r in s?s[r]=a:e[r]=a,!0),defineProperty:(e,t,r)=>Reflect.defineProperty(s,t,r),deleteProperty:(e,t)=>Reflect.deleteProperty(s,t)},m=Object.create(e);return new Proxy(m,g)},g=e=>({addListener(t,r){for(var s=arguments.length,a=new Array(s>2?s-2:0),n=2;n<s;n++)a[n-2]=arguments[n];t.addListener(e.get(r),...a)},hasListener:(t,r)=>t.hasListener(e.get(r)),removeListener(t,r){t.removeListener(e.get(r))}}),m=new s((e=>"function"!=typeof e?e:function(t){const r=l(t,{},{getContent:{minArgs:0,maxArgs:0}});e(r)})),c=new s((e=>"function"!=typeof e?e:function(t,r,s){let a,n,i=!1,o=new Promise((e=>{a=function(t){i=!0,e(t)}}));try{n=e(t,r,a)}catch(e){n=Promise.reject(e)}const l=!0!==n&&((g=n)&&"object"==typeof g&&"function"==typeof g.then);var g;if(!0!==n&&!l&&!i)return!1;return(l?n:o).then((e=>{s(e)}),(e=>{let t;t=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:t})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),d=(r,s)=>{let{reject:a,resolve:n}=r;e.runtime.lastError?e.runtime.lastError.message===t?n():a(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?a(new Error(s.message)):n(s)},f=function(e,t,r){for(var s=arguments.length,a=new Array(s>3?s-3:0),i=3;i<s;i++)a[i-3]=arguments[i];if(a.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${n(t.minArgs)} for ${e}(), got ${a.length}`);if(a.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${n(t.maxArgs)} for ${e}(), got ${a.length}`);return new Promise(((e,t)=>{const s=d.bind(null,{resolve:e,reject:t});a.push(s),r.sendMessage(...a)}))},A={devtools:{network:{onRequestFinished:g(m)}},runtime:{onMessage:g(c),onMessageExternal:g(c),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return r.privacy={network:{"*":h},services:{"*":h},websites:{"*":h}},l(e,A,r)};e.exports=r(chrome)}else e.exports=globalThis.browser;else console.error("This script should only be loaded in a browser extension.")},void 0===(s=r.apply(t,[e]))||(e.exports=s)},35802:function(e,t){!function(e){"use strict";var t=(e,t,r,s)=>{let a=65535&e|0,n=e>>>16&65535|0,i=0;for(;0!==r;){i=r>2e3?2e3:r,r-=i;do{a=a+t[s++]|0,n=n+a|0}while(--i);a%=65521,n%=65521}return a|n<<16|0};const r=new Uint32Array((()=>{let e,t=[];for(var r=0;r<256;r++){e=r;for(var s=0;s<8;s++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t})());var s=(e,t,s,a)=>{const n=r,i=a+s;e^=-1;for(let r=a;r<i;r++)e=e>>>8^n[255&(e^t[r])];return-1^e};const a=16209;var n=function(e,t){let r,s,n,i,o,l,g,m,c,d,f,A,h,u,b,w,x,k,p,v,_,y,E,R;const C=e.state;r=e.next_in,E=e.input,s=r+(e.avail_in-5),n=e.next_out,R=e.output,i=n-(t-e.avail_out),o=n+(e.avail_out-257),l=C.dmax,g=C.wsize,m=C.whave,c=C.wnext,d=C.window,f=C.hold,A=C.bits,h=C.lencode,u=C.distcode,b=(1<<C.lenbits)-1,w=(1<<C.distbits)-1;e:do{A<15&&(f+=E[r++]<<A,A+=8,f+=E[r++]<<A,A+=8),x=h[f&b];t:for(;;){if(k=x>>>24,f>>>=k,A-=k,k=x>>>16&255,0===k)R[n++]=65535&x;else{if(!(16&k)){if(0==(64&k)){x=h[(65535&x)+(f&(1<<k)-1)];continue t}if(32&k){C.mode=16191;break e}e.msg="invalid literal/length code",C.mode=a;break e}p=65535&x,k&=15,k&&(A<k&&(f+=E[r++]<<A,A+=8),p+=f&(1<<k)-1,f>>>=k,A-=k),A<15&&(f+=E[r++]<<A,A+=8,f+=E[r++]<<A,A+=8),x=u[f&w];r:for(;;){if(k=x>>>24,f>>>=k,A-=k,k=x>>>16&255,!(16&k)){if(0==(64&k)){x=u[(65535&x)+(f&(1<<k)-1)];continue r}e.msg="invalid distance code",C.mode=a;break e}if(v=65535&x,k&=15,A<k&&(f+=E[r++]<<A,A+=8,A<k&&(f+=E[r++]<<A,A+=8)),v+=f&(1<<k)-1,v>l){e.msg="invalid distance too far back",C.mode=a;break e}if(f>>>=k,A-=k,k=n-i,v>k){if(k=v-k,k>m&&C.sane){e.msg="invalid distance too far back",C.mode=a;break e}if(_=0,y=d,0===c){if(_+=g-k,k<p){p-=k;do{R[n++]=d[_++]}while(--k);_=n-v,y=R}}else if(c<k){if(_+=g+c-k,k-=c,k<p){p-=k;do{R[n++]=d[_++]}while(--k);if(_=0,c<p){k=c,p-=k;do{R[n++]=d[_++]}while(--k);_=n-v,y=R}}}else if(_+=c-k,k<p){p-=k;do{R[n++]=d[_++]}while(--k);_=n-v,y=R}for(;p>2;)R[n++]=y[_++],R[n++]=y[_++],R[n++]=y[_++],p-=3;p&&(R[n++]=y[_++],p>1&&(R[n++]=y[_++]))}else{_=n-v;do{R[n++]=R[_++],R[n++]=R[_++],R[n++]=R[_++],p-=3}while(p>2);p&&(R[n++]=R[_++],p>1&&(R[n++]=R[_++]))}break}}break}}while(r<s&&n<o);p=A>>3,r-=p,A-=p<<3,f&=(1<<A)-1,e.next_in=r,e.next_out=n,e.avail_in=r<s?s-r+5:5-(r-s),e.avail_out=n<o?o-n+257:257-(n-o),C.hold=f,C.bits=A};const i=15,o=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),l=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),g=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),m=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var c=(e,t,r,s,a,n,c,d)=>{const f=d.bits;let A,h,u,b,w,x,k=0,p=0,v=0,_=0,y=0,E=0,R=0,C=0,T=0,S=0,Z=null;const F=new Uint16Array(16),I=new Uint16Array(16);let M,U,B,O=null;for(k=0;k<=i;k++)F[k]=0;for(p=0;p<s;p++)F[t[r+p]]++;for(y=f,_=i;_>=1&&0===F[_];_--);if(y>_&&(y=_),0===_)return a[n++]=20971520,a[n++]=20971520,d.bits=1,0;for(v=1;v<_&&0===F[v];v++);for(y<v&&(y=v),C=1,k=1;k<=i;k++)if(C<<=1,C-=F[k],C<0)return-1;if(C>0&&(0===e||1!==_))return-1;for(I[1]=0,k=1;k<i;k++)I[k+1]=I[k]+F[k];for(p=0;p<s;p++)0!==t[r+p]&&(c[I[t[r+p]]++]=p);if(0===e?(Z=O=c,x=20):1===e?(Z=o,O=l,x=257):(Z=g,O=m,x=0),S=0,p=0,k=v,w=n,E=y,R=0,u=-1,T=1<<y,b=T-1,1===e&&T>852||2===e&&T>592)return 1;for(;;){M=k-R,c[p]+1<x?(U=0,B=c[p]):c[p]>=x?(U=O[c[p]-x],B=Z[c[p]-x]):(U=96,B=0),A=1<<k-R,h=1<<E,v=h;do{h-=A,a[w+(S>>R)+h]=M<<24|U<<16|B|0}while(0!==h);for(A=1<<k-1;S&A;)A>>=1;if(0!==A?(S&=A-1,S+=A):S=0,p++,0==--F[k]){if(k===_)break;k=t[r+c[p]]}if(k>y&&(S&b)!==u){for(0===R&&(R=y),w+=v,E=k-R,C=1<<E;E+R<_&&(C-=F[E+R],!(C<=0));)E++,C<<=1;if(T+=1<<E,1===e&&T>852||2===e&&T>592)return 1;u=S&b,a[u]=y<<24|E<<16|w-n|0}}return 0!==S&&(a[w+S]=k-R<<24|64<<16|0),d.bits=y,0},d={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{Z_FINISH:f,Z_BLOCK:A,Z_TREES:h,Z_OK:u,Z_STREAM_END:b,Z_NEED_DICT:w,Z_STREAM_ERROR:x,Z_DATA_ERROR:k,Z_MEM_ERROR:p,Z_BUF_ERROR:v,Z_DEFLATED:_}=d,y=16180,E=16190,R=16191,C=16192,T=16194,S=16199,Z=16200,F=16206,I=16209,M=e=>(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24);function U(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const B=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<y||t.mode>16211?1:0},O=e=>{if(B(e))return x;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=y,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,u},D=e=>{if(B(e))return x;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,O(e)},N=(e,t)=>{let r;if(B(e))return x;const s=e.state;return t<0?(r=0,t=-t):(r=5+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?x:(null!==s.window&&s.wbits!==t&&(s.window=null),s.wrap=r,s.wbits=t,D(e))},P=(e,t)=>{if(!e)return x;const r=new U;e.state=r,r.strm=e,r.window=null,r.mode=y;const s=N(e,t);return s!==u&&(e.state=null),s};let j,L,z=!0;const $=e=>{if(z){j=new Int32Array(512),L=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(c(1,e.lens,0,288,j,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;c(2,e.lens,0,32,L,0,e.work,{bits:5}),z=!1}e.lencode=j,e.lenbits=9,e.distcode=L,e.distbits=5},H=(e,t,r,s)=>{let a;const n=e.state;return null===n.window&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new Uint8Array(n.wsize)),s>=n.wsize?(n.window.set(t.subarray(r-n.wsize,r),0),n.wnext=0,n.whave=n.wsize):(a=n.wsize-n.wnext,a>s&&(a=s),n.window.set(t.subarray(r-s,r-s+a),n.wnext),(s-=a)?(n.window.set(t.subarray(r-s,r),0),n.wnext=s,n.whave=n.wsize):(n.wnext+=a,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=a))),0};var K={inflateReset:D,inflateReset2:N,inflateResetKeep:O,inflateInit:e=>P(e,15),inflateInit2:P,inflate:(e,r)=>{let a,i,o,l,g,m,d,U,O,D,N,P,j,L,z,K,W,q,Y,G,V,X,J=0;const Q=new Uint8Array(4);let ee,te;const re=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(B(e)||!e.output||!e.input&&0!==e.avail_in)return x;a=e.state,a.mode===R&&(a.mode=C),g=e.next_out,o=e.output,d=e.avail_out,l=e.next_in,i=e.input,m=e.avail_in,U=a.hold,O=a.bits,D=m,N=d,X=u;e:for(;;)switch(a.mode){case y:if(0===a.wrap){a.mode=C;break}for(;O<16;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(2&a.wrap&&35615===U){0===a.wbits&&(a.wbits=15),a.check=0,Q[0]=255&U,Q[1]=U>>>8&255,a.check=s(a.check,Q,2,0),U=0,O=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&U)<<8)+(U>>8))%31){e.msg="incorrect header check",a.mode=I;break}if((15&U)!==_){e.msg="unknown compression method",a.mode=I;break}if(U>>>=4,O-=4,V=8+(15&U),0===a.wbits&&(a.wbits=V),V>15||V>a.wbits){e.msg="invalid window size",a.mode=I;break}a.dmax=1<<a.wbits,a.flags=0,e.adler=a.check=1,a.mode=512&U?16189:R,U=0,O=0;break;case 16181:for(;O<16;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(a.flags=U,(255&a.flags)!==_){e.msg="unknown compression method",a.mode=I;break}if(57344&a.flags){e.msg="unknown header flags set",a.mode=I;break}a.head&&(a.head.text=U>>8&1),512&a.flags&&4&a.wrap&&(Q[0]=255&U,Q[1]=U>>>8&255,a.check=s(a.check,Q,2,0)),U=0,O=0,a.mode=16182;case 16182:for(;O<32;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.head&&(a.head.time=U),512&a.flags&&4&a.wrap&&(Q[0]=255&U,Q[1]=U>>>8&255,Q[2]=U>>>16&255,Q[3]=U>>>24&255,a.check=s(a.check,Q,4,0)),U=0,O=0,a.mode=16183;case 16183:for(;O<16;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.head&&(a.head.xflags=255&U,a.head.os=U>>8),512&a.flags&&4&a.wrap&&(Q[0]=255&U,Q[1]=U>>>8&255,a.check=s(a.check,Q,2,0)),U=0,O=0,a.mode=16184;case 16184:if(1024&a.flags){for(;O<16;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.length=U,a.head&&(a.head.extra_len=U),512&a.flags&&4&a.wrap&&(Q[0]=255&U,Q[1]=U>>>8&255,a.check=s(a.check,Q,2,0)),U=0,O=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(P=a.length,P>m&&(P=m),P&&(a.head&&(V=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(l,l+P),V)),512&a.flags&&4&a.wrap&&(a.check=s(a.check,i,P,l)),m-=P,l+=P,a.length-=P),a.length))break e;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===m)break e;P=0;do{V=i[l+P++],a.head&&V&&a.length<65536&&(a.head.name+=String.fromCharCode(V))}while(V&&P<m);if(512&a.flags&&4&a.wrap&&(a.check=s(a.check,i,P,l)),m-=P,l+=P,V)break e}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===m)break e;P=0;do{V=i[l+P++],a.head&&V&&a.length<65536&&(a.head.comment+=String.fromCharCode(V))}while(V&&P<m);if(512&a.flags&&4&a.wrap&&(a.check=s(a.check,i,P,l)),m-=P,l+=P,V)break e}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;O<16;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(4&a.wrap&&U!==(65535&a.check)){e.msg="header crc mismatch",a.mode=I;break}U=0,O=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),e.adler=a.check=0,a.mode=R;break;case 16189:for(;O<32;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}e.adler=a.check=M(U),U=0,O=0,a.mode=E;case E:if(0===a.havedict)return e.next_out=g,e.avail_out=d,e.next_in=l,e.avail_in=m,a.hold=U,a.bits=O,w;e.adler=a.check=1,a.mode=R;case R:if(r===A||r===h)break e;case C:if(a.last){U>>>=7&O,O-=7&O,a.mode=F;break}for(;O<3;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}switch(a.last=1&U,U>>>=1,O-=1,3&U){case 0:a.mode=16193;break;case 1:if($(a),a.mode=S,r===h){U>>>=2,O-=2;break e}break;case 2:a.mode=16196;break;case 3:e.msg="invalid block type",a.mode=I}U>>>=2,O-=2;break;case 16193:for(U>>>=7&O,O-=7&O;O<32;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if((65535&U)!=(U>>>16^65535)){e.msg="invalid stored block lengths",a.mode=I;break}if(a.length=65535&U,U=0,O=0,a.mode=T,r===h)break e;case T:a.mode=16195;case 16195:if(P=a.length,P){if(P>m&&(P=m),P>d&&(P=d),0===P)break e;o.set(i.subarray(l,l+P),g),m-=P,l+=P,d-=P,g+=P,a.length-=P;break}a.mode=R;break;case 16196:for(;O<14;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(a.nlen=257+(31&U),U>>>=5,O-=5,a.ndist=1+(31&U),U>>>=5,O-=5,a.ncode=4+(15&U),U>>>=4,O-=4,a.nlen>286||a.ndist>30){e.msg="too many length or distance symbols",a.mode=I;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;O<3;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.lens[re[a.have++]]=7&U,U>>>=3,O-=3}for(;a.have<19;)a.lens[re[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,ee={bits:a.lenbits},X=c(0,a.lens,0,19,a.lencode,0,a.work,ee),a.lenbits=ee.bits,X){e.msg="invalid code lengths set",a.mode=I;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;J=a.lencode[U&(1<<a.lenbits)-1],z=J>>>24,K=J>>>16&255,W=65535&J,!(z<=O);){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(W<16)U>>>=z,O-=z,a.lens[a.have++]=W;else{if(16===W){for(te=z+2;O<te;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(U>>>=z,O-=z,0===a.have){e.msg="invalid bit length repeat",a.mode=I;break}V=a.lens[a.have-1],P=3+(3&U),U>>>=2,O-=2}else if(17===W){for(te=z+3;O<te;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}U>>>=z,O-=z,V=0,P=3+(7&U),U>>>=3,O-=3}else{for(te=z+7;O<te;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}U>>>=z,O-=z,V=0,P=11+(127&U),U>>>=7,O-=7}if(a.have+P>a.nlen+a.ndist){e.msg="invalid bit length repeat",a.mode=I;break}for(;P--;)a.lens[a.have++]=V}}if(a.mode===I)break;if(0===a.lens[256]){e.msg="invalid code -- missing end-of-block",a.mode=I;break}if(a.lenbits=9,ee={bits:a.lenbits},X=c(1,a.lens,0,a.nlen,a.lencode,0,a.work,ee),a.lenbits=ee.bits,X){e.msg="invalid literal/lengths set",a.mode=I;break}if(a.distbits=6,a.distcode=a.distdyn,ee={bits:a.distbits},X=c(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,ee),a.distbits=ee.bits,X){e.msg="invalid distances set",a.mode=I;break}if(a.mode=S,r===h)break e;case S:a.mode=Z;case Z:if(m>=6&&d>=258){e.next_out=g,e.avail_out=d,e.next_in=l,e.avail_in=m,a.hold=U,a.bits=O,n(e,N),g=e.next_out,o=e.output,d=e.avail_out,l=e.next_in,i=e.input,m=e.avail_in,U=a.hold,O=a.bits,a.mode===R&&(a.back=-1);break}for(a.back=0;J=a.lencode[U&(1<<a.lenbits)-1],z=J>>>24,K=J>>>16&255,W=65535&J,!(z<=O);){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(K&&0==(240&K)){for(q=z,Y=K,G=W;J=a.lencode[G+((U&(1<<q+Y)-1)>>q)],z=J>>>24,K=J>>>16&255,W=65535&J,!(q+z<=O);){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}U>>>=q,O-=q,a.back+=q}if(U>>>=z,O-=z,a.back+=z,a.length=W,0===K){a.mode=16205;break}if(32&K){a.back=-1,a.mode=R;break}if(64&K){e.msg="invalid literal/length code",a.mode=I;break}a.extra=15&K,a.mode=16201;case 16201:if(a.extra){for(te=a.extra;O<te;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.length+=U&(1<<a.extra)-1,U>>>=a.extra,O-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;J=a.distcode[U&(1<<a.distbits)-1],z=J>>>24,K=J>>>16&255,W=65535&J,!(z<=O);){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(0==(240&K)){for(q=z,Y=K,G=W;J=a.distcode[G+((U&(1<<q+Y)-1)>>q)],z=J>>>24,K=J>>>16&255,W=65535&J,!(q+z<=O);){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}U>>>=q,O-=q,a.back+=q}if(U>>>=z,O-=z,a.back+=z,64&K){e.msg="invalid distance code",a.mode=I;break}a.offset=W,a.extra=15&K,a.mode=16203;case 16203:if(a.extra){for(te=a.extra;O<te;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}a.offset+=U&(1<<a.extra)-1,U>>>=a.extra,O-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){e.msg="invalid distance too far back",a.mode=I;break}a.mode=16204;case 16204:if(0===d)break e;if(P=N-d,a.offset>P){if(P=a.offset-P,P>a.whave&&a.sane){e.msg="invalid distance too far back",a.mode=I;break}P>a.wnext?(P-=a.wnext,j=a.wsize-P):j=a.wnext-P,P>a.length&&(P=a.length),L=a.window}else L=o,j=g-a.offset,P=a.length;P>d&&(P=d),d-=P,a.length-=P;do{o[g++]=L[j++]}while(--P);0===a.length&&(a.mode=Z);break;case 16205:if(0===d)break e;o[g++]=a.length,d--,a.mode=Z;break;case F:if(a.wrap){for(;O<32;){if(0===m)break e;m--,U|=i[l++]<<O,O+=8}if(N-=d,e.total_out+=N,a.total+=N,4&a.wrap&&N&&(e.adler=a.check=a.flags?s(a.check,o,N,g-N):t(a.check,o,N,g-N)),N=d,4&a.wrap&&(a.flags?U:M(U))!==a.check){e.msg="incorrect data check",a.mode=I;break}U=0,O=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;O<32;){if(0===m)break e;m--,U+=i[l++]<<O,O+=8}if(4&a.wrap&&U!==(4294967295&a.total)){e.msg="incorrect length check",a.mode=I;break}U=0,O=0}a.mode=16208;case 16208:X=b;break e;case I:X=k;break e;case 16210:return p;default:return x}return e.next_out=g,e.avail_out=d,e.next_in=l,e.avail_in=m,a.hold=U,a.bits=O,(a.wsize||N!==e.avail_out&&a.mode<I&&(a.mode<F||r!==f))&&H(e,e.output,e.next_out,N-e.avail_out),D-=e.avail_in,N-=e.avail_out,e.total_in+=D,e.total_out+=N,a.total+=N,4&a.wrap&&N&&(e.adler=a.check=a.flags?s(a.check,o,N,e.next_out-N):t(a.check,o,N,e.next_out-N)),e.data_type=a.bits+(a.last?64:0)+(a.mode===R?128:0)+(a.mode===S||a.mode===T?256:0),(0===D&&0===N||r===f)&&X===u&&(X=v),X},inflateEnd:e=>{if(B(e))return x;let t=e.state;return t.window&&(t.window=null),e.state=null,u},inflateGetHeader:(e,t)=>{if(B(e))return x;const r=e.state;return 0==(2&r.wrap)?x:(r.head=t,t.done=!1,u)},inflateSetDictionary:(e,r)=>{const s=r.length;let a,n,i;return B(e)?x:(a=e.state,0!==a.wrap&&a.mode!==E?x:a.mode===E&&(n=1,n=t(n,r,s,0),n!==a.check)?k:(i=H(e,r,s,s),i?(a.mode=16210,p):(a.havedict=1,u)))},inflateInfo:"pako inflate (from Nodeca project)"};const W=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var q={assign:function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(const t in r)W(r,t)&&(e[t]=r[t])}}return e},flattenChunks:e=>{let t=0;for(let r=0,s=e.length;r<s;r++)t+=e[r].length;const r=new Uint8Array(t);for(let t=0,s=0,a=e.length;t<a;t++){let a=e[t];r.set(a,s),s+=a.length}return r}};let Y=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){Y=!1}const G=new Uint8Array(256);for(let e=0;e<256;e++)G[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;G[254]=G[254]=1;var V={string2buf:e=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);let t,r,s,a,n,i=e.length,o=0;for(a=0;a<i;a++)r=e.charCodeAt(a),55296==(64512&r)&&a+1<i&&(s=e.charCodeAt(a+1),56320==(64512&s)&&(r=65536+(r-55296<<10)+(s-56320),a++)),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Uint8Array(o),n=0,a=0;n<o;a++)r=e.charCodeAt(a),55296==(64512&r)&&a+1<i&&(s=e.charCodeAt(a+1),56320==(64512&s)&&(r=65536+(r-55296<<10)+(s-56320),a++)),r<128?t[n++]=r:r<2048?(t[n++]=192|r>>>6,t[n++]=128|63&r):r<65536?(t[n++]=224|r>>>12,t[n++]=128|r>>>6&63,t[n++]=128|63&r):(t[n++]=240|r>>>18,t[n++]=128|r>>>12&63,t[n++]=128|r>>>6&63,t[n++]=128|63&r);return t},buf2string:(e,t)=>{const r=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));let s,a;const n=new Array(2*r);for(a=0,s=0;s<r;){let t=e[s++];if(t<128){n[a++]=t;continue}let i=G[t];if(i>4)n[a++]=65533,s+=i-1;else{for(t&=2===i?31:3===i?15:7;i>1&&s<r;)t=t<<6|63&e[s++],i--;i>1?n[a++]=65533:t<65536?n[a++]=t:(t-=65536,n[a++]=55296|t>>10&1023,n[a++]=56320|1023&t)}}return((e,t)=>{if(t<65534&&e.subarray&&Y)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let r="";for(let s=0;s<t;s++)r+=String.fromCharCode(e[s]);return r})(n,a)},utf8border:(e,t)=>{(t=t||e.length)>e.length&&(t=e.length);let r=t-1;for(;r>=0&&128==(192&e[r]);)r--;return r<0||0===r?t:r+G[e[r]]>t?r:t}},X={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var J=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var Q=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const ee=Object.prototype.toString,{Z_NO_FLUSH:te,Z_FINISH:re,Z_OK:se,Z_STREAM_END:ae,Z_NEED_DICT:ne,Z_STREAM_ERROR:ie,Z_DATA_ERROR:oe,Z_MEM_ERROR:le}=d;function ge(e){this.options=q.assign({chunkSize:65536,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new J,this.strm.avail_out=0;let r=K.inflateInit2(this.strm,t.windowBits);if(r!==se)throw new Error(X[r]);if(this.header=new Q,K.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=V.string2buf(t.dictionary):"[object ArrayBuffer]"===ee.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=K.inflateSetDictionary(this.strm,t.dictionary),r!==se)))throw new Error(X[r])}function me(e,t){const r=new ge(t);if(r.push(e),r.err)throw r.msg||X[r.err];return r.result}ge.prototype.push=function(e,t){const r=this.strm,s=this.options.chunkSize,a=this.options.dictionary;let n,i,o;if(this.ended)return!1;for(i=t===~~t?t:!0===t?re:te,"[object ArrayBuffer]"===ee.call(e)?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(0===r.avail_out&&(r.output=new Uint8Array(s),r.next_out=0,r.avail_out=s),n=K.inflate(r,i),n===ne&&a&&(n=K.inflateSetDictionary(r,a),n===se?n=K.inflate(r,i):n===oe&&(n=ne));r.avail_in>0&&n===ae&&r.state.wrap>0&&0!==e[r.next_in];)K.inflateReset(r),n=K.inflate(r,i);switch(n){case ie:case oe:case ne:case le:return this.onEnd(n),this.ended=!0,!1}if(o=r.avail_out,r.next_out&&(0===r.avail_out||n===ae))if("string"===this.options.to){let e=V.utf8border(r.output,r.next_out),t=r.next_out-e,a=V.buf2string(r.output,e);r.next_out=t,r.avail_out=s-t,t&&r.output.set(r.output.subarray(e,e+t),0),this.onData(a)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(n!==se||0!==o){if(n===ae)return n=K.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,!0;if(0===r.avail_in)break}}return!0},ge.prototype.onData=function(e){this.chunks.push(e)},ge.prototype.onEnd=function(e){e===se&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=q.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var ce=ge,de=me,fe=function(e,t){return(t=t||{}).raw=!0,me(e,t)},Ae=me,he=d,ue={Inflate:ce,inflate:de,inflateRaw:fe,ungzip:Ae,constants:he};e.Inflate=ce,e.constants=he,e.default=ue,e.inflate=de,e.inflateRaw=fe,e.ungzip=Ae,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}(()=>{"use strict";var e=r(35802);r(89412);const t=new Map;let s;self.importScripts("rlottie-wasm.js");const a=new Promise((e=>{Module.onRuntimeInitialized=()=>{s={init:Module.cwrap("lottie_init","",[]),destroy:Module.cwrap("lottie_destroy","",["number"]),resize:Module.cwrap("lottie_resize","",["number","number","number"]),buffer:Module.cwrap("lottie_buffer","number",["number"]),render:Module.cwrap("lottie_render","",["number","number"]),loadFromData:Module.cwrap("lottie_load_from_data","number",["number","number"])},e()}})),n=new Map;async function i(t){const r=await fetch(t),s=r.headers.get("Content-Type");if(null!=s&&s.startsWith("text/"))return r.text();const a=await r.arrayBuffer();return(0,e.inflate)(a,{to:"string"})}function o(e,t,r){const s=t?30:60,a=JSON.parse(e).fr||s,n=a%s==0?a/s:1;return{reduceFactor:n,msPerFrame:1e3/(a/n),reducedFramesCount:Math.ceil(r/n)}}!function(e,r){function s(e,t){e.channel=r,t?postMessage(e,t):postMessage(e)}(function(e){self.onerror=t=>{var r;console.error(t),e({type:"unhandledError",error:{message:(null===(r=t.error)||void 0===r?void 0:r.message)||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(t=>{var r;console.error(t),e({type:"unhandledError",error:{message:(null===(r=t.reason)||void 0===r?void 0:r.message)||"Uncaught rejection in worker"}})}))})(s),onmessage=a=>{var n;(null===(n=a.data)||void 0===n?void 0:n.channel)===r&&async function(e,r,s,a,n){switch(a||(a=e=>{s({type:"update",update:e})}),r.type){case"init":{var i;const{args:t}=r,s="function"==typeof e?e("init",n,a,...t):null===(i=e.init)||void 0===i?void 0:i.call(e,a,...t);await s;break}case"callMethod":{const{messageId:a,name:i,args:o,withCallback:l}=r;try{if(a&&l){const e=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t[t.length-1];var i;s({type:"methodCallback",messageId:a,callbackArgs:t},(i=n)instanceof ArrayBuffer||i instanceof ImageBitmap?[n]:void 0)};t.set(a,e),o.push(e)}const r="function"==typeof e?await e(i,n,...o):await e[i](...o),{arrayBuffer:g}="object"==typeof r&&"arrayBuffer"in r&&r||{};a&&s({type:"methodResponse",messageId:a,response:r},g?[g]:void 0)}catch(e){a&&s({type:"methodResponse",messageId:a,error:{message:e.message}})}a&&t.delete(a);break}case"cancelProgress":{const e=t.get(r.messageId);e&&(e.isCanceled=!0);break}}}(e,a.data,s)}}({"rlottie:init":async function(e,t,r,l,g,m){s||await a;const c=await i(t),d=allocate(intArrayFromString(c),"i8",0),f=s.init(),A=s.loadFromData(f,d);s.resize(f,r,r);const h=new ImageData(r,r),{reduceFactor:u,msPerFrame:b,reducedFramesCount:w}=o(c,l,A);n.set(e,{imgSize:r,reduceFactor:u,handle:f,imageData:h,customColor:g}),m(u,b,w)},"rlottie:changeData":async function(e,t,r,l){s||await a;const g=await i(t),m=allocate(intArrayFromString(g),"i8",0),{handle:c}=n.get(e),d=s.loadFromData(c,m),{reduceFactor:f,msPerFrame:A,reducedFramesCount:h}=o(g,r,d);l(f,A,h)},"rlottie:renderFrames":async function(e,t,r){s||await a;const{imgSize:i,reduceFactor:o,handle:l,imageData:g,customColor:m}=n.get(e),c=t*o;s.render(l,c);const d=s.buffer(l),f=Module.HEAPU8.subarray(d,d+i*i*4);if(m){const e=new Uint8ClampedArray(f);!function(e,t){for(let r=0;r<e.length;r+=4)e[r]=t[0],e[r+1]=t[1],e[r+2]=t[2]}(e,m),g.data.set(e)}else g.data.set(f);r(t,await createImageBitmap(g))},"rlottie:destroy":function e(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{const e=n.get(t);s.destroy(e.handle),n.delete(t)}catch(s){r||setTimeout((()=>e(t,!0)),1e3)}}})})()})();
//# sourceMappingURL=60.99fbd3b38685ff028f81.js.map