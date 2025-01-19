import { useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

//MATMSG:TO:{email};SUB:{subject};BODY:{message};;

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    subject: '',
    text: '',
  });
  const { setUserInputValue } = useQRGeneratorContext();

  const handleEmailFormSubmit = (e) => {
    e.preventDefault();

    if (!emailData.email.length) return;
    const { email, subject, text } = emailData;
    const combinedMailData = `MATMSG:TO:${email};SUB:${subject};BODY:${text};;`;
    setUserInputValue(combinedMailData);
  };

  return (
    <form
      className="flex flex-col gap-5 w-full justify-center items-center"
      onSubmit={handleEmailFormSubmit}
    >
      <div className="flex gap-5 max-[900px]:flex-wrap">
        <div className="flex flex-col w-full">
          <label
            htmlFor="mail"
            className="text-gray-400 font-semibold cursor-pointer"
          >
            Email
          </label>
          <input
            id="mail"
            name="mail"
            className="p-2 w-full outline-none text-xl mt-1 bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
            type="text"
            value={emailData.email}
            onChange={(e) => {
              setEmailData({ ...emailData, email: e.target.value });
            }}
            placeholder="john@doe.de"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="subj"
            className="text-gray-400 font-semibold cursor-pointer"
          >
            Subject (optional)
          </label>
          <input
            id="subj"
            name="subject"
            className="p-2 w-full outline-none text-xl mt-1 bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
            type="text"
            value={emailData.subject}
            onChange={(e) =>
              setEmailData({ ...emailData, subject: e.target.value })
            }
            placeholder="Hello"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="mail-text"
          className="text-gray-400 font-semibold cursor-pointer"
        >
          Message (optional)
        </label>
        <textarea
          id="mail-text"
          className="p-2 mt-1 w-full outline-none text-xl resize-y min-h-20 max-h-[175px] bg-[#d8d8d8] focus:bg-[#f6f6f6] transition-colors rounded-sm"
          value={emailData.text}
          onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
        ></textarea>
      </div>
      <button
        className="flex justify-center items-center text-white h-11 w-32 bg-green-500 hover:bg-green-400 active:bg-green-300 rounded-md transition-colors"
        type="submit"
        title="Generate QR"
      >
        <BsQrCode size={25} />
      </button>
    </form>
  );
};

export default EmailForm;
