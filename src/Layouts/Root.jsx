import {Outlet} from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-popin">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;