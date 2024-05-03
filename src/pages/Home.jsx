import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/NavbarUser";
import imageOpening from "../components/image/imageOpeningHomePage.png";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faClockRotateLeft,
  faDesktop,
  faSimCard,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="dashboard px-32 py-20">
          <h2 className="text-3xl font-bold text-center">Dashboard</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="shadow-xl px-6 py-10 rounded-xl text-center">
              <div className="flex flex-col gap-4">
                <div>
                  <FontAwesomeIcon icon={faDesktop} className="text-6xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Management Device</h2>
                  <p>1 Akun dapat mengelola banyak device</p>
                </div>
              </div>
            </div>
            <div className="shadow-xl px-6 py-10 rounded-xl text-center">
              <div className="flex flex-col gap-4">
                <div>
                  <FontAwesomeIcon icon={faSimCard} className="text-6xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Simpan Kontak</h2>
                  <p>Menyimpan kontak untuk digunakan di kemudian hari</p>
                </div>
              </div>
            </div>
            <div className="shadow-xl px-6 py-10 rounded-xl text-center">
              <div className="flex flex-col gap-4">
                <div>
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    className="text-6xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">Riwayat Pesan</h2>
                  <p>Riwayat pesan yang dikirimkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing px-32 py-20">
          <h2 className="text-3xl font-bold text-center">Paket</h2>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
              <div className="rounded-2xl border border-[#135D66] p-6 shadow-sm ring-1 ring-[#135D66] sm:px-8 lg:p-12">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900">Free</h2>
                  <p className="mt-2 sm:mt-4">
                    <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      Rp.0
                    </p>
                    <span className="text-sm font-medium text-gray-700">
                      /bulan
                    </span>
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> 1.000 pesan/bulan </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Kirim personal </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Kirim group </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Pesan text </span>
                  </li>
                </ul>
                <a
                  href="/register"
                  className="mt-8 block rounded-full border border-[#135D66] bg-[#135D66] px-12 py-3 text-center text-sm font-medium text-white  focus:outline-none focus:ring"
                >
                  Get Started
                </a>
              </div>
              <div className="rounded-2xl border border-[#135D66] p-6 shadow-sm ring-1 ring-[#135D66] sm:px-8 lg:p-12">
                <div className="text-center">
                  <h2 className="text-lg font-medium text-gray-900">Free</h2>
                  <p className="mt-2 sm:mt-4">
                    <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                      Rp.0
                    </p>
                    <span className="text-sm font-medium text-gray-700">
                      /bulan
                    </span>
                  </p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> 1.000 pesan/bulan </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Kirim personal </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Kirim group </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheck} className="size-5" />
                    <span className="text-gray-700"> Pesan text </span>
                  </li>
                </ul>
                <a
                  href="/register"
                  className="mt-8 block rounded-full border border-[#135D66] bg-[#135D66] px-12 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring "
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="faq px-32 py-20">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <section className="shadow-xl rounded-xl">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 text-gray-600">
                Daftar pertanyaan yang paling sering ditanyakan
              </p>
              <div className="space-y-4">
                <details className="w-full border rounded-lg">
                  <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                    Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                    odio?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                    porttitor egestas tincidunt neque vehicula potenti.{" "}
                  </p>
                </details>
                <details className="w-full border rounded-lg">
                  <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                    Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                    suscipit erat?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Justo libero tellus integer tincidunt justo semper consequat
                    venenatis aliquet imperdiet. Ultricies urna proin fusce
                    nulla pretium sodales vel magna et massa euismod vulputate
                    sed.{" "}
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
