import { faCheckCircle } from "@fortawesome/free-regular-svg-icons/faCheckCircle";
import {
  faCartShopping,
  faComputer,
  faLink,
  faLock,
  faMessage,
  faMinus,
  faPenToSquare,
  faPlug,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SidebarComp from "../components/Sidebar";
import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faBox } from "@fortawesome/free-solid-svg-icons/faBox";

export default function Device() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleToggle3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <>
      {/* <SidebarComp /> */}
      <div className="">
        <div className="grid md:grid-cols-3 gap-4 my-4">
          <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
            <div>
              <div className="flex">
                <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                  <FontAwesomeIcon icon={faComputer} />
                </div>
                <div className="pl-4">
                  <p className="text-gray-400">Device</p>
                  <p className=" font-bold text-gray-600 text-3xl ">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
            <div>
              <div className="flex">
                <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div className="pl-4">
                  <p className="text-gray-400">Connect</p>
                  <p className=" font-bold text-gray-600 text-3xl ">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
            <div>
              <div className="flex">
                <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className="pl-4">
                  <p className="text-gray-400">Message</p>
                  <p className=" font-bold text-gray-600 text-3xl ">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-3">
          <div className="flex justify-between border-b-2">
            <div className="content-center p-3">
              <div className="text-2xl font-semibold">Device</div>
            </div>
            <div className="content-center">
              <div>
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  type="button"
                  className="border ordber-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5  bg-gray-800  text-white  border-gray-600  hover:bg-gray-700  hover:border-gray-600  focus:ring-gray-700"
                >
                  <FontAwesomeIcon icon={faPlus} /> Add Device
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 p-3">
            <div>
              <div className="mb-6">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-900 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Device
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Package
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Acttion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon
                            icon={faComputer}
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="py-2 font-semibold text-sm">
                          6261826181
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                        </div>
                        <div className="py-2 text-xs">Test1234567</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="py-2 text-xs">Connect</div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon icon={faBox} className="w-5 h-5" />
                        </div>
                        <div className="py-2 font-semibold text-sm">Super</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon
                            icon={faMessage}
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="py-2 text-xs">8.172</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="py-2">
                          <FontAwesomeIcon
                            icon={faCircle}
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="py-2 text-xs">17 May 2024</div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-[#2361CE]  text-white  border-gray-600 "
                        >
                          <FontAwesomeIcon icon={faPlug} /> Reconnect
                        </button>
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-[#E11D48]  text-white  border-gray-600"
                        >
                          <FontAwesomeIcon icon={faMinus} /> Disconnect
                        </button>
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-[#31316A]  text-white  border-gray-600"
                        >
                          <FontAwesomeIcon icon={faCartShopping} /> Order
                        </button>
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-[#1F2937]  text-white  border-gray-600"
                        >
                          <FontAwesomeIcon icon={faLock} /> Token
                        </button>
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-[#3d7ce8]  text-white  border-gray-600"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} /> Edit
                        </button>
                        <button
                          type="button"
                          className="border focus:outline-none focus:ring-4 font-medium rounded-lg text-xs px-3 py-2  bg-red-600  text-white  border-gray-600"
                        >
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer className="bg-white rounded-lg shadow d my-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
            <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
            <span className="block text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Made With
              </a>
              . In Binusa.
            </span>
          </div>
        </footer>
      </div>

      {/* Add Modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow  ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  ">
              <h3 className="text-xl font-semibold ">Add Device</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div>
                <form action="">
                  <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-md font-medium text-gray-900"
                  >
                    Device Name
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="w-4 h-4 text-gray-500"
                      />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400"
                      placeholder="name@flowbite.com"
                    />
                  </div>
                  <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-md font-medium text-gray-900"
                  >
                    Device Number
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="w-6 h-6 text-gray-500"
                      />
                    </div>
                    <input
                      type="number"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5 placeholder-gray-400"
                      placeholder="08xxxxxxxx"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-md font-medium text-gray-900"
                    >
                      Chat Bot
                    </label>
                    <label className="mt-2 flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={handleToggle}
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  ${
                          isChecked
                            ? "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white"
                            : ""
                        } after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  border-gray-600 peer-checked:bg-blue-600`}
                      ></div>
                      <span className="ms-3 text-sm font-medium text-gray-900  ">
                        {isChecked ? "On" : "Off"}
                      </span>
                    </label>
                    <div>
                      <span className="italic">
                        Set to on if you are building chatbot
                      </span>
                    </div>
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor=""
                      className="text-md font-medium text-gray-900"
                    >
                      Personal
                    </label>
                    <label className="mt-2 flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isChecked2}
                        onChange={handleToggle2}
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full ${
                          isChecked2
                            ? "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white"
                            : ""
                        } after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  border-gray-600 peer-checked:bg-blue-600`}
                      ></div>
                      <span className="ms-3 text-sm font-medium text-gray-900">
                        {isChecked2 ? "On" : "Off"}
                      </span>
                    </label>
                    <div>
                      <span className="italic">Autoreply to individual</span>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-md font-medium text-gray-900"
                    >
                      Group
                    </label>
                    <label className="mt-2 flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isChecked3}
                        onChange={handleToggle3}
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full ${
                          isChecked3
                            ? "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white"
                            : ""
                        } after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  border-gray-600 peer-checked:bg-blue-600`}
                      ></div>
                      <span className="ms-3 text-sm font-medium text-gray-900">
                        {isChecked3 ? "On" : "Off"}
                      </span>
                    </label>
                    <div>
                      <span className="italic">
                        Autoreply to whatsapp group
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 w-ful">
                    <button
                      data-modal-hide="default-modal"
                      type="submit"
                      className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Add Device
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
    </>
  );
}
