import React, { useEffect, useState } from 'react';
import localForage from 'localforage';
import PropTypes from 'prop-types';

import CookieModal from '../primitives/cookie-modal';
import Header from '../components/header';
import Footer from '../components/footer';

const COOKIE_KEY = 'cookie_accepted';

export default function SiteWrapper({ transparent, children, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    localForage.getItem(COOKIE_KEY).then(value => {
      if (!value) {
        setIsOpen(true);
      }
    });
  }, []);

  const onClose = () => {
    setIsOpen(false);
    localForage.setItem(COOKIE_KEY, new Date().toISOString());
  };

  return (
    <Header transparent={transparent} {...rest}>
      {children}
      <Footer />
      <CookieModal isOpen={isOpen} onClose={onClose} />
    </Header>
  );
}

SiteWrapper.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SiteWrapper.defaultProps = {
  transparent: false,
};
