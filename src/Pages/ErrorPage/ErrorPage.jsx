import { Link, useRouteError } from "react-router-dom";
import { FaRegThumbsDown,FaHome } from "react-icons/fa";


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-work text-3xl font-bold mb-2">OOOooops!!! Sorry You Are In the Wrong Route</h1>
        <div>
          <FaRegThumbsDown className="text-5xl"></FaRegThumbsDown>
        </div>
        <h2 className="font-work text-3xl font-bold mb-2">{error?.status}</h2>
        <h2 className="font-work text-5xl font-bold mb-2">{error.statusText}</h2>
        <Link to="/" className="font-work text-2xl font-semibold mb-4 text-[#23BE0A]"> <div className="flex items-center gap-1"> <p>Go Back Home</p><FaHome className="text-3xl"></FaHome></div>  </Link>
       
      </div>
    </div>
    );
};

export default ErrorPage;