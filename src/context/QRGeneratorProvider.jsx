import PropTypes from 'prop-types';
import { useState } from 'react';
import { QRGeneratorContext } from './QRGeneratorContext';

const QRGeneratorProvider = ({ children }) => {
  const [textInputValue, setTextInputValue] = useState(''); //Basic Text Input value

  const contextValue = { textInputValue, setTextInputValue };

  return (
    <QRGeneratorContext.Provider value={contextValue}>
      {children}
    </QRGeneratorContext.Provider>
  );
};

//Prop Types
QRGeneratorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default QRGeneratorProvider;
