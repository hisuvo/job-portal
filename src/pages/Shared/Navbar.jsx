import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo-sm.png";

export default function Navbar() {
  const { user, singOut } = useContext(AuthContext);

  const handleSingOut = (e) => {
    singOut();
  };

  const Links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/my-application"}>My Application</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {" "}
              {Links}{" "}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-12" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user && user?.email ? (
            <Link onClick={handleSingOut} to={"/auth/login"} className="btn">
              Sing Out
            </Link>
          ) : (
            <>
              <Link to={"/auth/register"} className="underline">
                Register
              </Link>
              <Link to={"/auth/login"} className="btn">
                Sing In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
