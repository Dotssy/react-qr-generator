import UserInputForm from './components/UserInputForm';
import QRCode from './components/QRCode';

function App() {
  return (
    <div className="max-w-[1200px] m-auto">
      <h1 className="text-4xl text-center font-bold mb-6 text-white">
        React QR Generator
      </h1>
      <div className="flex justify-between gap-4 bg-[#2e2d2d] p-8 rounded">
        <UserInputForm />
        <QRCode />
      </div>
    </div>
  );
}

export default App;
