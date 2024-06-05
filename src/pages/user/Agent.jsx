import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { url_user_agent } from "../../utils/baseURL";

const authorization = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};

function Agent() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const getAll = () => {
      axios
        .get(`${url_user_agent}`, authorization)
        .then((res) => {
          setAgents(res.data.data);
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
        <div className="agent border-b-2 pb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold px-10">Agents</h1>
        </div>
        <div className="form px-16 py-5">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  No
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nama Agent
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {agents.map((agent, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                    {agent.name}
                  </td>
                  <td className="flex gap-3 justify-center border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
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
    </>
  );
}

export default Agent;
