import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import { useDevice, useCookiePopup } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';

import styles from './cookie-modal.module.scss';

export default () => {
  const { isOpen, onClose } = useCookiePopup();
  const { isMobile } = useDevice();
  return (
    <FlexContainer
      align={isMobile ? 'flexStart' : 'center'}
      direction={isMobile ? 'column' : 'row'}
      className={classNames(styles.container, {
        [styles.containerOpen]: isOpen,
      })}
    >
      <span
        className={classNames(styles.text, { [styles.textMobile]: isMobile })}
      >
        LifeLoop uses cookies to improve your experience on our site, analyze
        site traffic, and provide content from third parties. By continuing to
        use this website, you consent to the use of cookies in accordance with
        our <Link to="/cookie-policy">Cookie Policy</Link>. 
      </span>
      <Button onClick={onClose}>I Accept</Button>
    </FlexContainer>
  );
};
