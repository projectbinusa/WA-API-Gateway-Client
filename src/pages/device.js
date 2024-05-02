import { faAddressBook, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons/faCheckCircle";
import { faComputer, faLink } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function device() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 my-4">
        <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
          <p>
            <div className="flex">
              <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                <FontAwesomeIcon icon={faComputer} />
              </div>
              <div className="pl-4">
                <p className="text-gray-400">Device</p>
                <p className=" font-bold text-gray-600 text-3xl ">1</p>
              </div>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
          <p>
            <div className="flex">
              <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="pl-4">
                <p className="text-gray-400">Connect</p>
                <p className=" font-bold text-gray-600 text-3xl ">1</p>
              </div>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-start px-3 h-24 rounded bg-gray-50  ">
          <p>
            <div className="flex">
              <div className="p-3 text-3xl text-gray-600 bg-gray-200 rounded-md">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="pl-4">
                <p className="text-gray-400">Message</p>
                <p className=" font-bold text-gray-600 text-3xl ">1</p>
              </div>
            </div>
          </p>
        </div>
        
      </div>
      <div>
        <div className="flex justify-between bg-gray-50 rounded-md p-3">
          <div>
            <span>
              Device
            </span>
          </div>
          <div>
          <button type="button" class="border ordber-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  bg-gray-800  text-white  border-gray-600  hover:bg-gray-700  hover:border-gray-600  focus:ring-gray-700">
            Add Device
          </button>

          </div>
        </div>
      </div>
    </div>
  );
}
