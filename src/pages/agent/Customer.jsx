import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { url_agent_customer } from "../../utils/baseURL";
import Swal from "sweetalert2";

const authorization = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    hp: "",
    picture: "",
    address: "",
  });

  const openModal = (customerId) => {
    setSelectedCustomerId(customerId);
    setModalOpen(true);
    getCustomerById(customerId);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getCustomerById = (customerId) => {
    axios
      .get(`${url_agent_customer}/${customerId}`, authorization)
      .then((res) => {
        setSelectedCustomer(res.data.data);
        setFormData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log("Terjadi kesalahan " + error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .put(
        `${url_agent_customer}/${selectedCustomerId}`,
        formData,
        authorization
      )
      .then((res) => {
        console.log("Update berhasil:", res.data);
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Data customer berhasil diperbarui!",
        }).then(() => {
          setTimeout(() => {
            window.location.href = "/dashboard/customer";
          }, 1000);
        });
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat update:", error);
      });
  };

  useEffect(() => {
    const getAll = () => {
      axios
        .get(`${url_agent_customer}`, authorization)
        .then((res) => {
          setCustomers(res.data.data);
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log("Terjadi kesalahan " + error);
        });
    };
    getAll();
  }, []);

  return (
    <>
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="customer border-b-2 pb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold px-10">Customers</h1>
        </div>
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
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {customers.map((cus, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                    {cus.name}
                  </td>
                  <td className="flex gap-3 justify-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                    <a href={"chat-customer/" + cus.remote_id}>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-white bg-[#31316A] border rounded-lg p-2 cursor-pointer"
                      />
                    </a>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => openModal(cus.id)}
                      className="text-white bg-[#2361CE] border rounded-lg p-2 cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white bg-[#E11D48] border rounded-lg p-2 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50">
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
                      Ubah Customers
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="customer"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="name"
                        placeholder="Nama Customer"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama Customers
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="email"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="hp"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="hp"
                        placeholder="Nomor WhatsApp"
                        value={formData.hp}
                        onChange={handleChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nomor WhatsApp
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="picture"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="picture"
                        placeholder="Picture"
                        value={formData.picture}
                        onChange={handleChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Picture
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="address"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Address
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
                  onClick={handleSubmit}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#135D66] bg-[#135D66] px-6 py-2 text-xs font-medium text-white transition hover hover:text-[#776B5D] focus active active:bg-[#776d5b]"
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

export default Customer;
