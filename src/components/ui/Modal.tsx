import type { RefObject } from 'react';
import type {
  TeactNode,
} from '../../lib/teact/teact';
import React, {
  useCallback, useEffect, useRef,
} from '../../lib/teact/teact';

import { ANIMATION_END_DELAY } from '../../config';
import buildClassName from '../../util/buildClassName';
import captureKeyboardListeners from '../../util/captureKeyboardListeners';
import trapFocus from '../../util/trapFocus';
import { IS_EXTENSION } from '../../util/windowEnvironment';

import { useDeviceScreen } from '../../hooks/useDeviceScreen';
import useEffectWithPrevDeps from '../../hooks/useEffectWithPrevDeps';
import { dispatchHeavyAnimationEvent } from '../../hooks/useHeavyAnimationCheck';
import useLang from '../../hooks/useLang';
import useShowTransition from '../../hooks/useShowTransition';

import Button from './Button';
import Portal from './Portal';

import styles from './Modal.module.scss';

type OwnProps = {
  title?: string | TeactNode;
  className?: string;
  dialogClassName?: string;
  contentClassName?: string;
  isOpen?: boolean;
  isCompact?: boolean;
  isSlideUp?: boolean;
  noBackdrop?: boolean;
  noBackdropClose?: boolean;
  header?: any;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onCloseAnimationEnd?: () => void;
  onEnter?: () => void;
  dialogRef?: RefObject<HTMLDivElement>;
};

type StateProps = {
  shouldSkipHistoryAnimations?: boolean;
};

const ANIMATION_DURATION = 350;
const ANIMATION_DURATION_PORTRAIT = 500;

function Modal({
  dialogRef,
  title,
  className,
  dialogClassName,
  contentClassName,
  isOpen,
  isCompact,
  isSlideUp,
  noBackdrop,
  noBackdropClose,
  header,
  hasCloseButton,
  children,
  onClose,
  onCloseAnimationEnd,
  onEnter,
  shouldSkipHistoryAnimations,
}: OwnProps & StateProps): TeactJsx {
  const { isPortrait } = useDeviceScreen();
  const animationDuration = isPortrait ? ANIMATION_DURATION_PORTRAIT : ANIMATION_DURATION;

  const { shouldRender, transitionClassNames } = useShowTransition(
    isOpen,
    onCloseAnimationEnd,
    shouldSkipHistoryAnimations,
    false,
    shouldSkipHistoryAnimations,
    animationDuration + ANIMATION_END_DELAY,
  );

  // eslint-disable-next-line no-null/no-null
  const modalRef = useRef<HTMLDivElement>(null);
  const lang = useLang();

  const handleClose = useCallback(
    (e: KeyboardEvent) => {
      if (IS_EXTENSION) {
        e.preventDefault();
      }

      onClose();
    },
    [onClose],
  );

  useEffect(
    () => (isOpen ? captureKeyboardListeners({ onEsc: handleClose, onEnter }) : undefined),
    [handleClose, isOpen, onEnter],
  );
  useEffect(() => (isOpen && modalRef.current ? trapFocus(modalRef.current) : undefined), [isOpen]);

  useEffectWithPrevDeps(
    ([prevIsOpen]) => {
      if (isOpen || (!isOpen && prevIsOpen !== undefined)) {
        dispatchHeavyAnimationEvent(animationDuration + ANIMATION_END_DELAY);
      }
    },
    [animationDuration, isOpen],
  );

  if (!shouldRender) {
    return undefined;
  }

  function renderHeader() {
    if (header) {
      return header;
    }

    if (!title) {
      return undefined;
    }

    return (
      <div className={buildClassName(styles.header, !hasCloseButton && styles.header_noClose)}>
        <div className={styles.title}>{title}</div>
        {hasCloseButton && (
          <Button isRound className={styles.closeButton} ariaLabel={lang('Close')} onClick={onClose}>
            <i className={buildClassName(styles.closeIcon, 'icon-close')} aria-hidden />
          </Button>
        )}
      </div>
    );
  }

  const fullClassName = buildClassName(
    styles.modal,
    className,
    transitionClassNames,
    isSlideUp && isPortrait && styles.slideUp,
    isCompact && styles.compact,
  );

  const backdropFullClass = buildClassName(styles.backdrop, noBackdrop && styles.noBackdrop);

  const contentFullClassName = buildClassName(
    styles.content,
    isSlideUp && styles.contentSlideUp,
    'custom-scroll',
    contentClassName,
  );

  return (
    <Portal>
      <div ref={modalRef} className={fullClassName} tabIndex={-1} role="dialog">
        <div className={styles.container}>
          <div className={backdropFullClass} onClick={!noBackdropClose ? onClose : undefined} />
          <div className={buildClassName(styles.dialog, dialogClassName)} ref={dialogRef}>
            {renderHeader()}
            <div className={contentFullClassName}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
