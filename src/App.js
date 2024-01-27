import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
