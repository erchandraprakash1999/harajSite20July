import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageB from "./Components/PageB";
import PageC from "./Components/PageC";
import Home from "./Components/Home";
import Footer from "./Components/Footer"
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/b" element={<PageB></PageB>}></Route>
          <Route path="/c" element={<PageC></PageC>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
