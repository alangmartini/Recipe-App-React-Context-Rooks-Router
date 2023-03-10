import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copyClip from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import CopyConfirmation from './CopyConfirmation';

function ShareButton(props) {
  const [showHasCopied, setShowHasCopied] = useState(false);
  const { whatToCopy } = props;

  const ONE_SECOND = 1000;

  const handleClickToCopy = async () => {
    copyClip(whatToCopy);
    setShowHasCopied(true);
    setTimeout(() => setShowHasCopied(false), ONE_SECOND);
  };
  return (
    <>
      { showHasCopied && <CopyConfirmation /> }
      <button
        data-testid="share-btn"
        type="button"
        onClick={ handleClickToCopy }
      >
        <img
          src={ shareIcon }
          alt="share"
        />
      </button>
    </>
  );
}

ShareButton.propTypes = {
  whatToCopy: PropTypes.string.isRequired,
};

export default ShareButton;
