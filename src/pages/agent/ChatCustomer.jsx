import axios from "axios";
import { useEffect, useState } from "react";
import { url_agent_conversation } from "../../utils/baseURL";
import { useParams } from "react-router-dom";

const authorization = {
  headers: {
    "auth-wa": `jwt ${localStorage.getItem("token")}`,
  },
};

function ChatCustomer() {
  const [chatCustomer, setChatCustomer] = useState([]);
  const param = useParams();

  useEffect(() => {
    const getAll = () => {
      axios
        .get(`${url_agent_conversation}/${param.remot_id}`, authorization)
        .then((res) => {
          setChatCustomer(res.data.data);
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log("Terjadi kesalahan " + error);
        });
    };
    getAll();
  }, [param.remot_id]);

  return (
    <>
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="chat-customer border-b-2 pb-4">
          <h1 className="text-2xl font-semibold px-10">Chat Customer: Agus</h1>
        </div>
        {chatCustomer.map((chat, index) => {
          let customerMessages = [];
          let agentMessages = [];
          let customerClass = "px-16 py-[1.5px]";
          let agentClass = "px-16 py-[1.5px]";

          if (chat.author === param.remot_id) {
            if (
              index > 0 &&
              chatCustomer[index - 1].author !== param.remot_id
            ) {
              customerClass = "px-16 py-5";
            }

            customerMessages.push(
              <p
                className="bg-[#135D66] text-white p-2 rounded-xl w-fit"
                key={`${index}-message`}
              >
                {chat.message}
              </p>
            );

            if (
              index === 0 ||
              chatCustomer[index - 1].author !== param.remot_id
            ) {
              customerMessages.unshift(
                <div
                  className="p-2 text-lg font-semibold text-[#135D66]"
                  key={`${index}-author`}
                >
                  Customer
                </div>
              );
            }

            return (
              <div className={customerClass} key={index}>
                <div className="grid grid-cols-12">
                  <div className="col-end-13 col-span-6 text-right ml-auto">
                    {customerMessages}
                  </div>
                </div>
              </div>
            );
          } else {
            if (
              index > 0 &&
              chatCustomer[index - 1].author === param.remot_id
            ) {
              agentClass = "px-16 py-5";
            }

            agentMessages.push(
              <div
                className="bg-gray-100 p-2 rounded-xl"
                key={`${index}-message`}
              >
                {chat.message}
              </div>
            );

            if (
              index === 0 ||
              chatCustomer[index - 1].author === param.remot_id
            ) {
              agentMessages.unshift(
                <div
                  className="p-2 text-lg font-semibold text-[#135D66]"
                  key={`${index}-author`}
                >
                  Agen
                </div>
              );
            }

            return (
              <div className={agentClass} key={index}>
                <div className="grid grid-cols-12">
                  <div className="col-span-6">{agentMessages}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default ChatCustomer;
