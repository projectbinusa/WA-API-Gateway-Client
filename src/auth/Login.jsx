import React, { useState } from "react";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { base_url } from "../utils/baseURL";

function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const { data, status } = await axios.post(`${base_url}/login`, {
        email: email,
        password: password,
      });
      if (status === 200) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil login.",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("role", data.data.role);
        if (localStorage.getItem("role") === "agent") {
          navigate("/dashboard");
          window.location.reload();
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Email atau Password yang Anda masukan salah.",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <>
      <div className="all bg-[#F4F4F4] h-screen w-screen flex items-center justify-center py-10">
        <div className="container sm:w-4/5 md:w-3/5 lg:w-2/5 mx-5">
          <p className="text-lg flex items-center justify-center gap-3">
            <span className="mt-[1.5px]">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </span>{" "}
            Back to homepage
          </p>
          <div className="mt-3 card py-5 bg-[#fdfdfd] rounded-xl shadow-md px-5 md:px-10">
            <p className="text-center text-3xl font-semibold">Login</p>
            <form onSubmit={login}>
              <div className="mt-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <label
                  className="block text-gray-600 font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    id="password"
                    type={passwordType}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-0 top-0 mt-2 mr-4 cursor-pointer text-gray-600 hover:text-gray-900"
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
                <button
                  className="w-full flex items-center justify-center gap-3 select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-[#135D66] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
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
              Not registered?{" "}
              <span className="font-semibold">Create account</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
