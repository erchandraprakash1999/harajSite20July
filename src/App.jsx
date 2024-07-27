import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer"
import Header from "./Components/Header";
import { counterContext } from "../src/contexts/ActiveTabContexts"
import { useContext } from "react";
import { AddYourData } from "./dashboard/AddyourData";
import ProfilePage from "./user/ProfilePage";
import FollowersPage from "./user/FollowersPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<AddYourData/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
         
          <Route path="/followers" element={<FollowersPage />} ></Route>
        
        </Routes>
        <Footer/>
      </BrowserRouter>
      </counterContext.Provider>
    </>
  );
}

export default App;
