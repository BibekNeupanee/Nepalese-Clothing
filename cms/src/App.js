import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./routes/Dashboard/Dashboard";
import Fabrics from "./routes/Fabrics/Fabrics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Fabrics />} path="/fabrics" />
        <Route element={<Dashboard />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
