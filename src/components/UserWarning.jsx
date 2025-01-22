import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/custom-toast-styles.css';

const UserWarning = () => {
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

export default UserWarning;
