import { useQRGeneratorContext } from '../context/QRGeneratorContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import formTypes from '../data/formTypes';

const FormTypeSelect = () => {
  const { setFormType } = useQRGeneratorContext();

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <form
      onChange={handleFormTypeChange}
      className="flex justify-center gap-5 flex-wrap"
    >
      {formTypes.map((formName, i) => {
        return (
          <div key={i} className="flex items-center">
            <label
              htmlFor={formName}
              className="text-gray-400 mr-1 cursor-pointer"
            >
              {formName === 'url' || formName === 'sms'
                ? formName.toUpperCase()
                : capitalizeFirstLetter(formName)}
            </label>
            <input
              className="h-4 w-4 accent-green-300 checked:animate-bounce max-[740px]:checked:animate-none"
              type="radio"
              defaultChecked={i === 0 ? true : false}
              id={formName}
              name="form-type"
              value={formName}
            />
          </div>
        );
      })}
    </form>
  );
};

export default FormTypeSelect;
