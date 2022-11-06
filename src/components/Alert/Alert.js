import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./Alert.css";

export default function Alert() {

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={ 5000 }
            hideProgressBar
            newestOnTop={ false }
            closeOnClick
            rtl={ false }
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    );
}