import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { QRGeneratorContext } from './QRGeneratorContext';

const QRGeneratorProvider = ({ children }) => {
  const [userInputValue, setUserInputValue] = useState(''); //Basic Text Input value
  const [formType, setFormType] = useState('url');
  const [qrData, setQrData] = useState(null);

  // Fetch data from text input
  const fetchQrData = (textValue) => {
    const fetchDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=284x284&data=${textValue}`;

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
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Handling qr data fetch
  useEffect(() => {
    if (!userInputValue.length) return;

    setQrData(null);
    fetchQrData(userInputValue);
  }, [userInputValue]);

  const contextValue = { setUserInputValue, qrData, formType, setFormType };

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
