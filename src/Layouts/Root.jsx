import {Outlet} from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
const Root = () => {
    return (
        <div className="max-w-sm md:max-w-7xl lg:max-w-7xl mx-auto font-popin ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;