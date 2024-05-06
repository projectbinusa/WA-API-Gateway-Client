import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Customer() {
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
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                  Agus Supriadi
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Customer;
