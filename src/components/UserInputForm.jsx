const UserInputForm = () => {
  return (
    <div className="flex w-full p-6 justify-center border-solid border-[1px] border-gray-700 relative">
      <div className="absolute top-[-15px] bg-[#2e2d2d] text-center w-36">
        <h5 className="text-gray-400 text-lg uppercase tracking-wider">
          User Input
        </h5>
      </div>
      <form>
        <div>
          <input type="text" />
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;
