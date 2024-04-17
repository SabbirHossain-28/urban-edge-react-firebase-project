import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Root = () => {
  return (
    <div className="max-w-sm md:p-4 md:max-w-7xl lg:max-w-7xl mx-auto font-popin overflow-x-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
