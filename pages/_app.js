
import '../app/globals.css';
import { ToastContainer, toast } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <ToastContainer></ToastContainer>
  </>)
}

export default MyApp;
