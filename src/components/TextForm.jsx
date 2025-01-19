import { useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

const TextForm = () => {
  const [inputText, setInputText] = useState('');
  const { setUserInputValue } = useQRGeneratorContext();

  const handleTextFormSubmit = (e) => {
    e.preventDefault();

    if (!inputText.length) return;
    setUserInputValue(inputText);
  };

  return (
    <form
      className="flex w-full justify-center"
      onSubmit={handleTextFormSubmit}
    >
      <div className="flex flex-col w-full items-center gap-5">
        <textarea
          className="p-2 w-full outline-none text-xl resize-y min-h-20 max-h-[175px] bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something..."
        />
        <button
          className="flex justify-center items-center text-white h-11 w-32 bg-green-500 hover:bg-green-400 active:bg-green-300 rounded-md transition-colors"
          type="submit"
          title="Generate QR"
        >
          <BsQrCode size={25} />
        </button>
      </div>
    </form>
  );
};

export default TextForm;
