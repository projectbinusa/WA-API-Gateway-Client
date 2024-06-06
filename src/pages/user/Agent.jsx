import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { authConfig } from "../../utils/authConfig";

// Komponen Agen
function Agen() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [agents, setAgents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    hp: "",
    password: "",
  });

  useEffect(() => {
    fetchAgents();
  }, []);

  // Fungsi untuk mendapatkan daftar agen dari API
  const fetchAgents = async () => {
    try {
      const response = await axios.get(
        "https://api-whatsapp.lynk2.co/api/user/agent",
        authConfig
      );
      setAgents(response.data.data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  // Fungsi untuk membuka modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fungsi untuk menambahkan agen baru
  const addAgent = async () => {
    try {
      const response = await axios.post(
        "https://api-whatsapp.lynk2.co/api/user/agent",
        formData,
        authConfig
      );
      if (response.data.data) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Agent has been added successfully.",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            fetchAgents();
            closeModal();
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      }
    } catch (error) {
      console.error("Error adding agent:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <>
      {/* Tampilan Agen */}
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="agen border-b-2 pb-4 flex flex-col justify-between sm:flex-row items-center mx-9">
          <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
            Agent
          </h1>
          <button
            onClick={openModal}
            className="inline-block rounded bg-[#135D66] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#135D66] ml-0 sm:ml-4"
          >
            Tambah Agent
          </button>
        </div>
        {/* Tabel Agen */}
        <div className="form px-16 py-5">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  No
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nama Agen
                </th>
                {/* <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Action
                </th> */}
              </tr>
            </thead>

            <tbody>
              {agents.map((agent, index) => (
                <tr key={agent.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                    {agent.name}
                  </td>
                  {/* <td className="flex gap-3 justify-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-white bg-[#31316A] border rounded-lg p-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-white bg-[#2361CE] border rounded-lg p-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white bg-[#E11D48] border rounded-lg p-2 cursor-pointer"
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal tambah agent */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <div className="sm:flex sm:items-center flex-col">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-full">
                  <span className="space-y-3">
                    <h1 className="text-xl text-left font-bold ubuntu my-auto">
                      Tambah Agent
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="name"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="name"
                        placeholder="name"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="email"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="email"
                        id="email"
                        placeholder="email"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="address"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="address"
                        placeholder="address"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Alamat
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="hp"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="hp"
                        placeholder="noHp"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nomor Whatsapp
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="password"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="password"
                        id="password"
                        placeholder="password"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Password
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={addAgent}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Agen;
