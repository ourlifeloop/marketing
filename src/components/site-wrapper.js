import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CookieModal from '../primitives/cookie-modal';
import Header from '../components/header';
import Footer from '../components/footer';

// Optional Site Banner
const BANNER_CONFIG = {
  text: 'iN2L + LifeLoop | One Mission. One Solution.',
  link: '/in2l',
};

export default function SiteWrapper({ transparent, children, ...rest }) {
  useEffect(() => {
    if (window && window._trackPage) {
      window._trackPage({ location: window.location });
    }
  }, []);
  return (
    <Header transparent={transparent} banner={BANNER_CONFIG} {...rest}>
      {children}
      <Footer />
      <CookieModal />
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
