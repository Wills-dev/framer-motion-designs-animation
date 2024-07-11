import { Routes, Route } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import HomePage from "./HomePage/HomePage";

function App() {
  // const list = { hidden: { opacity: 0 } };
  // const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <motion.div
        className="box"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 200 }}
        dragConstraints={{ left: -100, right: 100 }}
        transition={{ ease: "easeOut", duration: 5 }}
      />
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />

      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ repeat: Infinity, ease: "easeOut", duration: 5 }}
      /> */}

      {/* <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul> */}
    </>
  );
}

export default App;
