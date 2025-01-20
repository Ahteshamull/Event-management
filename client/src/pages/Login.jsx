import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { handleError, handleSuccess } from "../Util";
import { ToastContainer } from "react-toastify";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;

      const copyloginInfo = { ...loginInfo };
      copyloginInfo[name] = value;
      setLoginInfo(copyloginInfo);
  };
  const handleLogin = async (e) => {
       e.preventDefault();
       const { email, password } = loginInfo;

       if (!email) {
         return handleError("Email Field Are Required");
       }
       if (!password) {
         return handleError("Password Field Are Required");
       }
       // if (!name || !email || !password) {
       //   return handleError("(Name & Email & Password) Fields Are Required")
       // }

       try {
         const url = "https://localhost:3000/api/v1/auth/login";
         const response = await fetch(url, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },

           body: JSON.stringify(loginInfo),
         });
         const result = await response.json();

         const { success, message, error, token, name } = result;
         if (success) {
           handleSuccess(message || "Login successfully");
           localStorage.setItem("jwtToken", token);
           localStorage.setItem("loggedInUser", name);

           setTimeout(() => {
             navigate("/");
           }, 1000);
         } else if (error) {
           const details = error?.details[0].message;
           handleError(details);
         } else if (!success) {
           handleError(message);
         }
       } catch (error) {
         handleError(error);
       }
    };
  return (
    <div>
      <div className="bg-gray-50 font-[sans-serif]">
        <div className="mt-20 mb-20 flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                Sign in
              </h2>
              <form onSubmit={handleLogin} className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      onChange={handleChange}
                      value={loginInfo.email}
                      name="email"
                      type="text"
                      required=""
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter user email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={10} cy={7} r={6} data-original="#000000" />
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      onChange={handleChange}
                      value={loginInfo.password}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required=""
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter password"
                    />
                    <div
                      className="absolute top-[10px] right-2 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <span>
                        {showPassword ? (
                          <FaEyeSlash size={22} className="text-gray-400" />
                        ) : (
                          <FaEye size={22} className="text-gray-400" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="!mt-8">
                  <button
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-gray-800 text-sm !mt-8 text-center">
                  Don't have an account?{" "}
                  <Link to={"/signup"}>
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                    >
                      Register here
                    </a>
                  </Link>
                </p>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
