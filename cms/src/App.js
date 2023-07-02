import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </>
    </div>
  );
}

export default App;
