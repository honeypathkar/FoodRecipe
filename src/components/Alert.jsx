import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//using react Toastify package for showing alert

export default function Alert(props) {
  const {mode} = props;
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={`${mode==="light"?"light":"dark"}`}
        transition:Bounce
      />
    </div>
  );
}
