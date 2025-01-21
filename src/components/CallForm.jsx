import { useState } from 'react';
import { BsQrCode } from 'react-icons/bs';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';
import { displayToast } from '../utils/displayToast';
import { filterNumbers } from '../utils/validators';
import { makeDashedNumber } from '../utils/makeDashedNumber';

//TEL:{number}

const CallForm = () => {
  const [telephoneNumberData, setTelephoneNumberData] = useState({
    countryCode: '',
    areaCode: '',
    phoneNumber: '',
  });
  const { setUserInputValue } = useQRGeneratorContext();
  const { countryCode, areaCode, phoneNumber } = telephoneNumberData;

  const handlePhoneNumberInputChange = (value, fieldName) => {
    if (filterNumbers(value) || value === '') {
      setTelephoneNumberData({ ...telephoneNumberData, [fieldName]: value });
    }
  };

  const handleCallFormSubmit = (e) => {
    e.preventDefault();

    if (!countryCode || !areaCode || !phoneNumber) {
      return displayToast('warn', 'All fields must be filled');
    }

    //Failsafe for autofilling less than 5 digits in phoneNumber field
    if (phoneNumber.length < 5) {
      return displayToast(
        'warn',
        'Phone number must be at least 5 digits long'
      );
    }

    const numberData = `TEL:%2B${countryCode}${areaCode}${phoneNumber}`;
    setUserInputValue(numberData);
  };

  return (
    <form
      className="flex flex-col gap-5 w-full justify-center items-center"
      onSubmit={handleCallFormSubmit}
    >
      <div className="text-center border-b-[1px] border-gray-400 pb-1">
        <span className="text-gray-400 text-xl font-semibold italic tracking-wider">
          +{countryCode.length ? countryCode : '_'}(
          {areaCode.length ? areaCode : '___'})
          {phoneNumber.length ? makeDashedNumber(phoneNumber) : '___-__-__'}
        </span>
      </div>
      <div className="flex gap-5 max-[1120px]:flex-wrap">
        <div className="flex gap-5 w-full max-[710px]:flex-wrap">
          <div className="flex flex-col w-full">
            <label
              htmlFor="c-code"
              className="text-gray-400 font-semibold cursor-pointer"
            >
              Country code
            </label>
            <input
              id="c-code"
              name="country_code"
              className="p-2 w-full outline-none text-xl mt-1 bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
              type="text"
              value={countryCode}
              maxLength={4}
              onChange={(e) =>
                handlePhoneNumberInputChange(e.target.value, 'countryCode')
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="a-code"
              className="text-gray-400 font-semibold cursor-pointer"
            >
              Area code
            </label>
            <input
              id="a-code"
              name="area_code"
              className="p-2 w-full outline-none text-xl mt-1 bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
              type="text"
              value={areaCode}
              maxLength={5}
              onChange={(e) =>
                handlePhoneNumberInputChange(e.target.value, 'areaCode')
              }
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="phone-number"
            className="text-gray-400 font-semibold cursor-pointer"
          >
            Phone number
          </label>
          <input
            id="phone-number"
            name="phone_number"
            className="p-2 w-full outline-none text-xl mt-1 bg-[#d8d8d8] focus:bg-[#f6f6f6] placeholder:text-gray-500 transition-colors rounded-sm"
            type="text"
            value={phoneNumber}
            minLength={5}
            maxLength={10}
            onChange={(e) =>
              handlePhoneNumberInputChange(e.target.value, 'phoneNumber')
            }
          />
        </div>
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

export default CallForm;
