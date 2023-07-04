import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./routes/Dashboard/Dashboard";
import Fabrics from "./routes/Fabrics/Fabrics";
import SearchProvider from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Fabrics />} path="/fabrics" />
          <Route element={<Dashboard />} path="*" />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
