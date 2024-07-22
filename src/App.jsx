import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer"
import Header from "./Components/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
