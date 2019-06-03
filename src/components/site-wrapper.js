import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

export default function SiteWrapper({ transparent, children }) {
  return (
    <Header transparent={transparent}>
      {children}
      <Footer />
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
