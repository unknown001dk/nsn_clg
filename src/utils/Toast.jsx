import { Slide, toast } from 'react-toastify';

export const toastSuccess = async (message) => {
  toast.success(message, {
    transition: Slide,
    position: "top-right",
  });
};

export const toastError = async (message) => {
  toast.error(message, {
    transition: Slide,
    position: "top-right"
  });
};

export const toastInfo = async (message) => {
  toast.info(message, {
    transition: Slide,
    position: "top-right"
  });
};

export const toastWarning = async (message) => {
  toast.warning(message, {
    transition: Slide,
    position: "top-right"
  });
};