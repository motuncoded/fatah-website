import React from "react"

import './App.css';
import Home from "./routes/Home";
import { useState, useEffect} from "react"
import Loader from "./components/Loader";

import About from "./routes/About";
import Experience from "./routes/Experience";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  const [loading, setLoading]= useState(false);

  useEffect(() => {
  setLoading(true);
  setTimeout(() =>{
  setLoading(false)
  }, 4000)
  }, [])
  return (
    <div className="app">
     

 {
        loading ? <Loader/>
      :
      <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
</>
 }
 

    </div>
    
  );
}

export default App;
