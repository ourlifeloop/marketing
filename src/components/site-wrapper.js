import React from 'react';
import PropTypes from 'prop-types';

import CookieModal from '../primitives/cookie-modal';
import Header from '../components/header';
import Footer from '../components/footer';

// Optional Site Banner
const BANNER_CONFIG = {
  text: 'Find Covid-19 Information Here',
  link: '/covid',
};

export default function SiteWrapper({ transparent, children, ...rest }) {
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
