import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      limit={4}
      closeButton={false}
    />
  );
};

export default Error;
