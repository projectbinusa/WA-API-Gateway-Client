function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent flex justify-between items-center px-32 py-2">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            alt="Logo"
            width={60}
          />
        </div>
        <div className="link flex items-center gap-5">
          <p className="text-lg font-semibold">Harga</p>
          <p className="text-lg font-semibold">FItur</p>
          <p className="text-lg font-semibold">FAQ</p>
          <p className="text-lg font-semibold">
            <button
              class="w-full select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-6 rounded-lg bg-[#135D66] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="submit"
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
