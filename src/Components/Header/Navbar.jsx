import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthContextProvider/AuthContextProvider";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, userLogout, loading } = useContext(AuthContext);
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    if (!loading) {
      setInitialLoading(false);
    }
  }, [loading]);
  const renderLoginButton = () => {
    if (initialLoading) {
      return <span className="loading loading-spinner loading-lg"></span>; // Show spinner during initial loading
    } else if (user) {
      return (
        <p className="bg-green-500 text-white rounded-md p-1 md:p-2 lg:p-2">
          <Link onClick={() => userLogout()}>Logout</Link>
        </p>
      );
    } else {
      return (
        <p className="bg-red-500 text-white rounded-md p-2">
          <Link to="/login">Login</Link>
        </p>
      );
    }
  };

  const navLinks = (
    <>
      <li className="mr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li> */}
      {user && (
        <li className="mr-3">
          <NavLink to="/updateProfile">Update Profile</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-200 mt-4 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[2] p-2 shadow bg-base-100 rounded-box w-48 "
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-[#BB915B] text-xl md:text-2xl lg:text-3xl font-bold">
          Estate-Finder
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 pr-6">
        <div>
          <div>{renderLoginButton()}</div>
        </div>
        <div
          className="w-14 tooltip tooltip-bottom"
          data-tip={user?.displayName}
        >
          {user ? (
            <div className="avatar online">
              <div className="w-sm rounded-full">
                <img className="w-full" src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <div className="avatar offline">
              <div className="w-sm rounded-full">
                <IoPersonCircleOutline className="text-5xl"></IoPersonCircleOutline>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
