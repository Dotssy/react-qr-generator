import { useQRGeneratorContext } from '../context/QRGeneratorContext';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const formTypes = ['url', 'text', 'email', 'call', 'sms'];

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
        if (i === 0) {
          return (
            <div key={i}>
              <label
                htmlFor={formName}
                className="text-gray-400 mr-1 cursor-pointer"
              >
                {formName.toUpperCase()}
              </label>
              <input
                type="radio"
                defaultChecked
                id={formName}
                name="form-type"
                value={formName}
              />
            </div>
          );
        } else {
          return (
            <div key={i}>
              <label
                htmlFor={formName}
                className="text-gray-400 mr-1 cursor-pointer"
              >
                {capitalizeFirstLetter(formName)}
              </label>
              <input
                type="radio"
                id={formName}
                name="form-type"
                value={formName}
              />
            </div>
          );
        }
      })}
    </form>
  );
};

export default FormTypeSelect;
