import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "./page/Home";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
