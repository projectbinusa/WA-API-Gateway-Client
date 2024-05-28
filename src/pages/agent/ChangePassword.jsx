import {
  faEye,
  faEyeSlash,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { url_agent_password } from "../../utils/baseURL";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const authorization = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};

const ChangePassword = () => {
  const [passwordType, setPasswordType] = useState({
    oldPassword: "password",
    newPassword: "password",
    confirmPassword: "password",
  });
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_new_password, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = (field) => {
    setPasswordType((prevState) => ({
      ...prevState,
      [field]: prevState[field] === "password" ? "text" : "password",
    }));
  };

  const edit = async (e) => {
    e.preventDefault();

    if (new_password !== confirm_new_password) {
      Swal.fire({
        title: "Password tidak sama",
        text: "Pastikan new password dan confirm password sama",
        icon: "error",
        confirmButtonText: "Oke",
      });
      return;
    }

    try {
      await axios.put(
        `${url_agent_password}`,
        {
          old_password,
          new_password,
          confirm_new_password,
        },
        authorization
      );

      navigate();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="setting border-b-2 pb-4">
          <h1 className="text-2xl font-semibold px-10">Change Password</h1>
        </div>
        <div className="form px-16">
          <form onSubmit={edit} className="grid grid-cols-2 gap-5 py-5">
            <div>
              <label
                htmlFor="oldPassword"
                className="block text-gray-600 font-semibold mb-2"
              >
                Old Password
              </label>
              <div className="flex">
                <span
                  className="cursor-pointer flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900"
                  onClick={() => togglePassword("oldPassword")}
                >
                  {passwordType.oldPassword === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="oldPassword"
                  id="oldPassword"
                  type={passwordType.oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Old Password"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-gray-600 font-semibold mb-2"
              >
                New Password
              </label>
              <div className="flex">
                <span
                  className="cursor-pointer flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900"
                  onClick={() => togglePassword("newPassword")}
                >
                  {passwordType.newPassword === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="newPassword"
                  id="newPassword"
                  type={passwordType.newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                />
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="col-span-2">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-600 font-semibold mb-2"
              >
                Confirm New Password
              </label>
              <div className="flex">
                <span
                  className="cursor-pointer flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900"
                  onClick={() => togglePassword("confirmPassword")}
                >
                  {passwordType.confirmPassword === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="confirmPassword"
                  id="confirmPassword"
                  type={passwordType.confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                />
              </div>
            </div>
            <div className="col-span-2">
              <button
                className="w-full flex items-center justify-center gap-3 select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-[#135D66] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="submit"
              >
                <span className="mt-[1.5px]">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
