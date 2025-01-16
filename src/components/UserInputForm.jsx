import { useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

const UserInputForm = () => {
  const [inputText, setInputText] = useState('');
  const { setTextInputValue } = useQRGeneratorContext();

  const hadleTextFormSubmit = (e) => {
    e.preventDefault();

    if (!inputText.length) return;
    setTextInputValue(inputText);
  };

  return (
    <div className="flex w-full p-6 justify-center border-solid border-[1px] border-gray-700 relative">
      <div className="absolute top-[-15px] bg-[#2e2d2d] text-center w-36">
        <h5 className="text-gray-400 text-lg uppercase tracking-wider">
          User Input
        </h5>
      </div>

      <form
        className="flex w-full justify-center mt-5"
        onSubmit={hadleTextFormSubmit}
      >
        <div className="flex w-full h-11">
          <input
            className="p-2 w-full outline-none text-xl bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-s-md"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text or link"
          />
          <button
            className="flex justify-center items-center text-white h-11 w-28 bg-green-500 hover:bg-green-400 active:bg-green-300 rounded-e-md transition-colors"
            type="submit"
          >
            <BsQrCode size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;
