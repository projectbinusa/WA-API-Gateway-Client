import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { url_customer } from "../utils/baseURL";

const authorization = {
  headers: {
    'Authorization': `jwt ${localStorage.getItem('token')}`,

  }
};

function Customer() {
  const [customer, setCustomer] = useState([]);

  const response = [
    {
      "id": 13,
      "user_id": 3,
      "remote_id": "628562213672@c.us",
      "email": "email",
      "name": "budi 3",
      "hp": "628562213672",
      "picture": "-",
      "address": "Semarang",
      "agent_id": 0,
      "created_date": "2024-05-11 04:03:35",
      "updated_date": "2024-05-11 04:03:35"
  },
  {
      "id": 14,
      "user_id": 3,
      "remote_id": "628562213672@c.us",
      "email": "email",
      "name": "budiono siregar",
      "hp": "628562213672",
      "picture": "-",
      "address": "Semarang",
      "agent_id": 0,
      "created_date": "2024-05-11 04:04:51",
      "updated_date": "2024-05-11 04:04:51"
  }
  ];

  const getDataCustomer = async () => {
    try {
      // const response = await axios.get(`${url_customer}`, authorization);
      setCustomer(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getDataCustomer();
  }, []);

  return (
    <>
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="customer border-b-2 pb-4">
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
              {customer.map((datas, idx) =>{
                return(
                  <>
                  <tr key={idx}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                  {idx + 1}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                  {datas.name}
                </td>
                <td className="flex gap-3 justify-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
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
                </td>
              </tr>
                  </>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Customer;
