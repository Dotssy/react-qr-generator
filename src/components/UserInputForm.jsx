import FormTypeSelect from './FormTypeSelect';
import UrlForm from './UrlForm';
import TextForm from './TextForm';
import EmailForm from './EmailForm';
import CallForm from './CallForm';
import SmsForm from './SmsForm';
import { useQRGeneratorContext } from '../context/QRGeneratorContext';

const UserInputForm = () => {
  const { formType } = useQRGeneratorContext();

  //Valid form components must be assigned
  const formTypeSelectSwitch = (formType) => {
    switch (formType) {
      case 'url':
        return <UrlForm />;
      case 'text':
        return <TextForm />;
      case 'email':
        return <EmailForm />;
      case 'call':
        return <CallForm />;
      case 'sms':
        return <SmsForm />;
      default:
        return (
          <div className="text-yellow-300 text-xl">
            <h4>Warning: no form component assigned!</h4>
          </div>
        );
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
