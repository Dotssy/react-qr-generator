const QRCode = () => {
  return (
    <div className="flex w-full p-6 justify-center items-center border-solid border-[1px] border-gray-700 relative">
      <div className="absolute top-[-15px] bg-[#2e2d2d] text-center w-32">
        <h5 className="text-gray-400 text-lg uppercase tracking-wider">
          QR Code
        </h5>
      </div>
      <div className="w-[284px] h-[284px] border-dotted border-2 border-sky-400"></div>
    </div>
  );
};

export default QRCode;
