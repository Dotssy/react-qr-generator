import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { QRGeneratorContext } from './QRGeneratorContext';
import { displayToast } from '../utils/displayToast';
import formTypes from '../data/formTypes';

const QRGeneratorProvider = ({ children }) => {
  const [userInputValue, setUserInputValue] = useState(''); //Basic Text Input value
  const [formType, setFormType] = useState(formTypes[0]);
  const [qrData, setQrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from text input
  const fetchQrData = (textValue) => {
    const fetchDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=284x284&data=${textValue}`;

    setIsLoading(true);

    axios
      .get(fetchDataUrl, { responseType: 'arraybuffer' })
      .then((response) => {
        const image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );

        const transformedImageData = `data:${response.headers[
          'content-type'
        ].toLowerCase()};base64,${image}`;

        setQrData(transformedImageData);
        setIsLoading(false);
      })
      .catch((error) => {
        displayToast('error', error.message);
        setUserInputValue('');
        setIsLoading(false);
      });
  };

  // Handling qr data fetch
  useEffect(() => {
    if (!userInputValue.length) return;

    setQrData(null);
    fetchQrData(userInputValue);
  }, [userInputValue]);

  const contextValue = {
    setUserInputValue,
    qrData,
    formType,
    setFormType,
    isLoading,
  };

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
