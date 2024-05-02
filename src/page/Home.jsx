import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/NavbarUser";
import imageOpening from "../components/image/DrawKit Vector Illustration Project Manager (5).png";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <div className="all bg-[#F4F4F4] min-h-screen text-[#135D66]">
        <Navbar />
        <div className="opening flex px-32">
          <div className="text-opening flex items-center w-[35%]">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-bold">UNOFFICIAL</h1>
              <h2 className="text-5xl font-bold">WHATSAPP API</h2>
              <p className="font-semibold">
                Kirim pesan whatsapp secara otomatis
              </p>
              <div>
                <button
                  class="text-lg flex items-center justify-center gap-3 select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-[#135D66] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="submit"
                >
                  Coba Gratis
                  <span className="mt-[1.5px]">
                    <FontAwesomeIcon icon={faTelegram} className="text-xl" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="image-opening w-[65%]">
            <img src={imageOpening} alt="Opening" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
