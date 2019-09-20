import React from 'react';
import PropTypes from 'prop-types';

import TrainingHeader from '../components/training-header';
import CookieModal from '../primitives/cookie-modal';
import Footer from '../components/footer';

export default function TrainingWrapper({ children, ...rest }) {
  return (
    <TrainingHeader {...rest}>
      {children}
      <Footer />
      <CookieModal />
    </TrainingHeader>
  );
}

TrainingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
