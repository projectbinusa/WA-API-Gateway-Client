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

// Komponen CustomerUser
function CustomerUser() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [Customers, setCustomers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hp, setHp] = useState("");
  const [picture, setPicture] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    hp: "",
    picture: "",
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Fungsi untuk mendapatkan daftar Customer dari API
  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "https://api-whatsapp.lynk2.co/api/user/customer",
        authConfig
      );
      setCustomers(response.data.data);
    } catch (error) {
      console.error("Error fetching Customers:", error);
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

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fungsi untuk menambahkan Customer baru
  const addCustomer = async () => {
    try {
      const response = await axios.post(
        "https://api-whatsapp.lynk2.co/api/user/customer",
        formData,
        authConfig
      );
      if (response.data.data) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Customer has been added successfully.",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            fetchCustomers();
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
      console.error("Error adding Customer:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  // Fungsi untuk menghapus Customer
  const deleteCustomer = async (customerId) => {
    try {
      const response = await axios.delete(
        `https://api-whatsapp.lynk2.co/api/user/customer/${customerId}`,
        authConfig
      );
      if (response.data.code === 200) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Customer has been deleted successfully.",
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            fetchCustomers();
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
      console.error("Error deleting Customer:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  const fetchCustomerUserById = async (id) => {
    try {
      const response = await axios.get(
        `https://api-whatsapp.lynk2.co/api/user/customer/${id}`,
        authConfig
      );
      setEditData(response.data.data);
      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setAddress(response.data.data.address);
      setHp(response.data.data.hp);
      setPicture(response.data.data.picture);
      setModalEditOpen(true);
    } catch (error) {
      console.error("Error fetching Customer by ID:", error);
      // Show SweetAlert on error fetching data
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal mengambil data Customer. Silakan coba lagi.",
      });
    }
  };

  // Function to open edit modal with data
  const openModalEdit = (id) => {
    fetchCustomerUserById(id); // Fetch Customer data by ID before opening modal
  };

  // Function to update Customer
  const putCustomerUser = async () => {
    try {
      const response = await axios.put(
        `https://api-whatsapp.lynk2.co/api/user/customer/${editData.id}`,
        { name, address, email, hp, picture },
        authConfig
      );
      closeModalEdit(); // Close modal after successful update
      // Show SweetAlert on successful update
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Customer berhasil diperbarui.",
      }).then((result) => {
        // Redirect to a specific page after successful update
        if (result.isConfirmed) {
          window.location.href = "/user/customer"; // Change "/dashboard" with the desired page URL
        }
      });
    } catch (error) {
      console.log(error);
      console.error("Error updating Customer:", error);
      // Show SweetAlert on error updating data
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal memperbarui Customer. Silakan coba lagi.",
      });
    }
  };

  return (
    <>
      {/* Tampilan Customer */}
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="Customer border-b-2 pb-4 flex flex-col justify-between sm:flex-row items-center mx-9">
          <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
            Customer
          </h1>
          <button
            onClick={openModal}
            className="inline-block rounded bg-[#135D66] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#135D66] ml-0 sm:ml-4"
          >
            Tambah Customer
          </button>
        </div>
        {/* Tabel Customer */}
        <div className="form px-16 py-5">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  No
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nama Customer
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {Customers.map((Customer, index) => (
                <tr key={Customer.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                    {Customer.name}
                  </td>

                  <td className="flex gap-3 justify-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-white bg-[#31316A] border rounded-lg p-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => openModalEdit(Customer.id)}
                      className="text-white bg-[#2361CE] border rounded-lg p-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white bg-[#E11D48] border rounded-lg p-2 cursor-pointer"
                      onClick={() => deleteCustomer(Customer.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal tambah Customer */}
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
                      Tambah Customer
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
                      htmlFor="picture"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="picture"
                        id="picture"
                        placeholder="picture"
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        picture
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
                  onClick={addCustomer}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {ModalEditOpen && editData && (
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
                      Edit Customer User
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="Customer"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="Customer"
                        placeholder="Customer"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        autoComplete="off"
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama Customer
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
                        type="text"
                        id="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete="off"
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
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        autoComplete="off"
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Address
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="nomor"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="number"
                        id="nomor"
                        placeholder="nomor"
                        onChange={(e) => setHp(e.target.value)}
                        value={hp}
                        autoComplete="off"
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nomor Whatsapp
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="picture"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="picture"
                        placeholder="picture"
                        onChange={(e) => setPicture(e.target.value)}
                        value={picture}
                        autoComplete="off"
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Foto
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModalEdit}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={putCustomerUser}
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

export default CustomerUser;
