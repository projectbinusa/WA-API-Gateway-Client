import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faComment,
  faEye,
  faEyeSlash,
  faFlag,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Setting() {
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
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="setting border-b-2 pb-4">
          <h1 className="text-2xl font-semibold px-10">Settings</h1>
        </div>
        <div className="form px-16">
          <form action="" className="grid grid-cols-2 gap-5 py-5">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faComment} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="whatsapp"
              >
                Whatsapp
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="whatsapp"
                  id="whatsapp"
                  type="text"
                  placeholder="Whatsapp"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                <select
                  className="cursor-pointer appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="country"
                  id="country"
                  type="text"
                >
                  <option value="Indonesia">Indonesia</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="password"
              >
                Change Password
              </label>
              <div className="flex">
                <span
                  className="cursor-pointer flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  id="password"
                  type={passwordType}
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="token"
              >
                Account Token
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="token"
                  id="token"
                  type="text"
                  placeholder="Account Token"
                />
              </div>
              <p className="text-sm italic mt-1 text-gray-600">
                This token is used for device API
              </p>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="timezone"
              >
                Timezone
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <select
                  className="cursor-pointer appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="timezone"
                  id="timezone"
                  type="text"
                >
                  <option value="Asia/Jakarta / Bangkok / Hanoi / Jakarta / Novosibirsk">
                    Asia/Jakarta / Bangkok / Hanoi / Jakarta / Novosibirsk
                  </option>
                </select>
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
}

export default Setting;
