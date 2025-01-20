import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Util";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signInfo, setSignInfo] = useState({
      name: "",
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;

      const copySignInfo = { ...signInfo };
      copySignInfo[name] = value;
      setSignInfo(copySignInfo);
  };
   const handleSignup = async (e) => {
     e.preventDefault();
     const { name, email, password } = signInfo;
     if (!name || !email || !password) {
       return handleError("(Name & Email & Password) Fields Are Required");
     }
     if (!name) {
       return handleError("Name Field Are Required");
     }
     if (!email) {
       return handleError("Email Field Are Required");
     }
     if (!password) {
       return handleError("Password Field Are Required");
     }

     try {
       const url = "https://localhost:3000/api/v1/auth/registration";
       const response = await fetch(url, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },

         body: JSON.stringify(signInfo),
       });
       console.log(response);
       const result = await response.json();
       const { success, message, error } = result;
       if (success) {
         handleSuccess(message || "Signup successful");

         setTimeout(() => {
           navigate("/login");
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
      <div className="flex flex-col justify-center font-[sans-serif]  p-4">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Registration Here</h2>
          </div>
          <form onSubmit={handleSignup}>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  onChange={handleChange}
                  value={signInfo.name}
                  name="name"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  value={signInfo.email}
                  name="email"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    onChange={handleChange}
                    value={signInfo.password}
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
            </div>
            <div className="!mt-8">
              <button
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link to={"/login"}>
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Login here
                </a>{" "}
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
