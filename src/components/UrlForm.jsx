import { useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';
import { displayToast } from '../utils/displayToast';
import { isUrlValid } from '../utils/validators';

const UrlForm = () => {
  const [inputText, setInputText] = useState('');
  const { setUserInputValue } = useQRGeneratorContext();

  const hadleUrlFormSubmit = (e) => {
    e.preventDefault();

    if (!inputText.length) return;

    if (!isUrlValid(inputText)) {
      return displayToast('warn', 'Please enter valid url format');
    }
    setUserInputValue(inputText);
  };

  return (
    <form className="flex w-full justify-center" onSubmit={hadleUrlFormSubmit}>
      <div className="flex w-full h-11">
        <input
          className="p-2 w-full outline-none text-xl bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-s-lg"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value.toLowerCase())}
          placeholder="http(s)://"
          spellCheck={false}
        />
        <button
          className="flex justify-center items-center text-white h-11 w-28 bg-green-500 hover:bg-green-400 active:bg-green-300 rounded-e-md transition-colors"
          type="submit"
          title="Generate QR"
        >
          <BsQrCode size={25} />
        </button>
      </div>
    </form>
  );
};

export default UrlForm;
