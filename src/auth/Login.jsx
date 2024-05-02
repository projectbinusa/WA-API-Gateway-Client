import React, { useState } from "react";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <div className="all bg-[#F4F4F4] h-screen w-screen flex items-center justify-center py-10">
        <div className="container sm:w-4/5 md:w-3/5 lg:w-2/5 mx-5">
          <div className="card py-5 bg-[#fdfdfd] rounded-xl shadow-md px-5 md:px-10 lg:px-16">
            <p className="text-center text-3xl font-semibold">Login</p>
            <form action="">
              <div className="mt-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="tlpn"
                >
                  No Telephone
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                  name="tlpn"
                  id="tlpn"
                  type="text"
                  placeholder="No Telephone"
                />
              </div>
              <div className="mt-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div class="relative">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    id="password"
                    type={passwordType}
                    placeholder="Password"
                  />
                  <span
                    class="absolute right-0 top-0 mt-2 mr-4 cursor-pointer text-gray-600 hover:text-gray-900"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="cursor-pointer shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                  name="country"
                  id="country"
                >
                  <option value="Indonesia">Indonesia</option>
                </select>
              </div>
              <div className="mt-6">
                <button
                  class="w-full flex items-center justify-center gap-3 select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-[#135D66] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="submit"
                >
                  Login
                  <span className="mt-[1.5px]">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </span>{" "}
                </button>
              </div>
            </form>
            <p className="text-center text-lg mt-6">
              Already have an account?{" "}
              <span className="font-semibold">Login here</span>
            </p>
            <p className="text-lg mt-6 flex items-center justify-center gap-3">
              <span className="mt-[1.5px]">
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </span>{" "}
              Back to homepage
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
