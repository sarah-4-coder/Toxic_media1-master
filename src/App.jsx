import "./sass/App.scss";
import Header from "./react-components/Header";
import Footer from "./react-components/Footer";
import Home from "./react-components/Home";
import Work from "./react-components/Work";
import Contact from "./react-components/Contact";
import Service from "./react-components/Service";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Gif from "./imgs/gif.gif";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mixBlendMode:"multiply",
            backgroundColor:"white"
          }}
        >
          <img alt="" src={Gif} style={{ width: "100px", height: "100px" }} />
        </motion.div>
      ) : null}

      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/work" Component={Work} />
          <Route path="/contact" Component={Contact} />
          <Route path="/service" Component={Service} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
