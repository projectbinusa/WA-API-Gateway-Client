import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faComment,
  faEye,
  faEyeSlash,
  faFlag,
  faPenToSquare,
  faAddressBook,
  faCalendar,
  faDotCircle,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { url_agent_profile } from "../../utils/baseURL";
import { useNavigate } from "react-router-dom";

const authorization = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};

const Setting = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [birth_place, setBirth_place] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [hp, setHp] = useState("");
  const [tag, setTag] = useState("");
  const [organization_name, setOrganization_name] = useState("");
  const [organization_address, setOrganization_address] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(() => {
    const getAll = () => {
      axios
        .get(`${url_agent_profile}`, authorization)
        .then((res) => {
          const profile = res.data.data;
          console.log(res.data.data);
          setName(profile.name);
          setAddress(profile.address);
          setBirth_date(profile.birth_date);
          setBirth_place(profile.birth_place);
          setDescription(profile.description);
          setHp(profile.hp);
          setOrganization_name(profile.organization_name);
          setOrganization_address(profile.organization_address);
        })
        .catch((error) => {
          console.log("Terjadi kesalahan " + error);
        });
    };
    getAll();
  }, []);

  const edit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${url_agent_profile}`,
        {
          name,
          address,
          birth_date,
          birth_place,
          picture,
          description,
          hp,
          tag,
          organization_name,
          organization_address,
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
          <h1 className="text-2xl font-semibold px-10">Settings</h1>
        </div>
        <div className="form px-16">
          <form onSubmit={edit} className="grid grid-cols-2 gap-5 py-5">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="address"
                  id="address"
                  type="text"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="birth_date"
              >
                Birth Date
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="birth_date"
                  id="birth_date"
                  type="text"
                  placeholder="birth_date"
                  value={birth_date}
                  onChange={(e) => setBirth_date(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="birth_place"
              >
                Birth Place
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="birth_place"
                  id="birth_place"
                  type="text"
                  placeholder="birth_place"
                  value={birth_place}
                  onChange={(e) => setBirth_place(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faNoteSticky} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="organization_name"
              >
                Organization Name
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faDotCircle} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="organization_name"
                  id="organization_name"
                  type="text"
                  placeholder="Organization Name"
                  value={organization_name}
                  onChange={(e) => setOrganization_name(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="organization_address"
              >
                Organization Address
              </label>
              <div className="flex">
                <span className="flex items-center justify-center border border-r-0 rounded-l-lg px-3 text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faDotCircle} />
                </span>
                <input
                  className="appearance-none border border-gray-200 rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="organization_address"
                  id="organization_address"
                  type="text"
                  placeholder="Organization Address"
                  value={organization_address}
                  onChange={(e) => setOrganization_address(e.target.value)}
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
                  <option value="profile.Indonesia">Indonesia</option>
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
                  <option value="profile.Asia/Jakarta / Bangkok / Hanoi / Jakarta / Novosibirsk">
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
};

export default Setting;
