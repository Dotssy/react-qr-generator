import { FaReact } from 'react-icons/fa';
import { IoQrCodeOutline } from 'react-icons/io5';
import UserInputForm from './components/UserInputForm';
import QRCode from './components/QRCode';
import UserWarning from './components/UserWarning';

function App() {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="flex text-white justify-center items-center mb-6 gap-5">
        <FaReact size={35} className="max-[470px]:hidden" />
        <h1 className="text-4xl text-center font-bold">React QR Generator</h1>
        <IoQrCodeOutline size={35} className="max-[470px]:hidden" />
      </div>
      <div className="flex justify-between gap-4 bg-[#2e2d2d] p-8 rounded max-[740px]:flex-col">
        <UserInputForm />
        <QRCode />
      </div>
      <UserWarning />
    </div>
  );
}

export default App;
