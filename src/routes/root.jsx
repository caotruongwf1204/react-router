import { Outlet } from "react-router-dom";
import Footer from "../conponents/footer";
import Header from "../conponents/header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function Root() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} newestOnTop></ToastContainer>
    </>
  );
}
