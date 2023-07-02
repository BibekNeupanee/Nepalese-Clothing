import { Route, Routes } from "react-router-dom";
import "../src/App.scss";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Home from "./routes/Home/Home";

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
