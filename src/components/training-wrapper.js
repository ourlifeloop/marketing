import React from 'react';
import PropTypes from 'prop-types';

import TrainingHeader from '../components/training-header';
import CookieModal from '../primitives/cookie-modal';
import Footer from '../components/footer';

import { useTrainingGate } from '../utils/effects';

export default function TrainingWrapper({ children, ...rest }) {
  useTrainingGate();

  return (
    <>
      <TrainingHeader {...rest} />
      {children}
      <Footer />
      <CookieModal />
    </>
  );
}

TrainingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
