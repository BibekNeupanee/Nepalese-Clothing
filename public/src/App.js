import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </>
  );
}

export default App;
