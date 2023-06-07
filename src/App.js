import { Route, Routes } from "react-router-dom";
import "../src/App.scss";
import AboutUs from "./Routes/AboutUs";
import ContactUs from "./Routes/ContactUs";
import Home from "./Routes/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<ContactUs />} path="/contact-us"></Route>
      </Routes>
    </>
  );
}

export default App;
