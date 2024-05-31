// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatAgen() {
  return (
    <>
      <div className="all card py-5 bg-[#fdfdfd] rounded-xl shadow-md">
        <div className="chat-agen border-b-2 pb-4">
          <h1 className="text-2xl font-semibold px-10">Chat Agen: Asep</h1>
        </div>
        <div className="px-16 py-5">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="p-2 text-lg font-semibold text-[#135D66]">
                Agen
              </div>
              <div className="bg-gray-100 p-2 rounded-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident obcaecati ut excepturi!
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-end-13 col-span-6 text-right ml-auto">
              <div className="p-2 text-lg font-semibold text-[#135D66]">
                Customer
              </div>
              <p className="bg-[#135D66] text-white p-2 rounded-xl w-fit">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatAgen;
