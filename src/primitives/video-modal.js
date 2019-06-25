import React from 'react';
import ReactModal from 'react-modal';
import ResponsiveEmbed from 'react-responsive-embed';

ReactModal.setAppElement('body');
const modalStyle = {
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 0,
    position: 'static',
    overflow: 'visible',
    border: 'none',
    width: '100%',
    maxWidth: 1200,
  },
};

export default ({ isOpen, onClose, link, title }) => {
  return (
    <ReactModal
      style={modalStyle}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
    >
      <ResponsiveEmbed src={link} title={title} />
    </ReactModal>
  );
};
