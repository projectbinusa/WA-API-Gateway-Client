import { faCheckCircle } from "@fortawesome/free-regular-svg-icons/faCheckCircle";
import { faComputer, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarComp from "../components/Sidebar"
import React from "react";

export default function device() {
  return (
    <>
    <SidebarComp />
    <div className="p-4 mt-12 sm:ml-64 bg-[#F4F4F4]">
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
      <div className="bg-gray-50 rounded-md p-3">
        <div className="flex justify-between border-b-2">
          <div className="content-center p-3">
            <div className="text-2xl font-semibold">
              Device
            </div>
          </div>
          <div className="content-center">
            <div>
               <button type="button" className="border ordber-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5  bg-gray-800  text-white  border-gray-600  hover:bg-gray-700  hover:border-gray-600  focus:ring-gray-700">
            Add Device
          </button>
            </div>
          </div>
        </div>
        <div className="mt-2 p-3">
          
        </div>
      </div>
    </div>
    </>
    
  );
}
