import React from "react";
import { ToastContainer, ToastContainerProps, Zoom } from "react-toastify";

type Props = Partial<ToastContainerProps>;

function Toaster(props: Props) {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Zoom}
      {...props}
    />
  );
}

export default Toaster;
