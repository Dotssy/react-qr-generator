import FormTypeSelect from './FormTypeSelect';
import UrlForm from './UrlForm';
import TextForm from './TextForm';
import EmailForm from './EmailForm';
import CallForm from './CallForm';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

const UserInputForm = () => {
  const { formType } = useQRGeneratorContext();

  const formTypeSelectSwitch = (formType) => {
    switch (formType) {
      case 'text':
        return <TextForm />;
      case 'email':
        return <EmailForm />;
      case 'call':
        return <CallForm />;
      case 'sms':
        return <CallForm />;
      default:
        return <UrlForm />;
    }
  };

  return (
    <div className="flex w-full p-6 flex-col gap-5 items-center border-solid border-[1px] border-gray-700 relative">
      <div className="absolute top-[-15px] bg-[#2e2d2d] text-center w-36">
        <h5 className="text-gray-400 text-lg uppercase tracking-wider">
          User Input
        </h5>
      </div>
      <FormTypeSelect />
      {formTypeSelectSwitch(formType)}
    </div>
  );
};

export default UserInputForm;
