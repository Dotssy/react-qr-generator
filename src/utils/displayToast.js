import { toast } from 'react-toastify';

export const displayToast = (type, message) => {
  toast[type](message);
  toast.clearWaitingQueue();
};
