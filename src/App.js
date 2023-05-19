import React from "react";
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/AppBar/Navbar";
import About from './components/About/About'
import OurWork from "./components/OurWork/OurWork";
import Booking from "./components/Booking/Booking";
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/work' element={<OurWork />} />
      <Route path='/booking' element={<Booking />} />
    </Routes>
    </>

    // <Router>
    //   <div>
    //     <Navbar />
    //     <div>
    //       <Routes>>
    //         <Route path="/" exact element={<Home />} />
    //         <Route path="/about" exact element={<About />} />
    //         {/* <Route path="/signup" element={<Signup />} />
    //           <Route path="/login" element={<Login />} /> */}
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
};

export default App;
