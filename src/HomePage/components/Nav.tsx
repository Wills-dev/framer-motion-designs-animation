import { Link } from "react-router-dom";
import { NavLink } from "../../types";
import { motion } from "framer-motion";

const Nav = () => {
  const navLinks: NavLink[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Projects",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  const menuSlider = {
    open: {
      x: "100%",
      transition: { duration: 5 },
    },
    closed: {
      x: "0",
      transition: { duration: 6 },
    },
  };

  const slider = {
    open: {
      x: "80px",
      transition: { duration: 5 },
    },
    closed: {
      x: "0px",
      transition: { duration: 5 },
    },
  };

  return (
    <motion.div
      variants={menuSlider}
      animate="enter"
      initial="initial"
      transition={{ duration: 5 }}
      exit={{ x: "100%" }}
      className="menu bg-purple-300 right-0 h-screen text-blue-950 fixed"
    >
      <div className="body p-[100px] flex justify-between ">
        {" "}
        <div className="header">
          <p>Navigation</p>

          <div className="nav mt-[80px] flex flex-col text-3xl ">
            {navLinks.map((navLink: NavLink, index) => (
              <motion.div
                className=""
                key={index}
                variants={slider}
                animate="enter"
                exit="exit"
                initial="initial"
                transition={{ duration: 0.6 }}
              >
                <Link to={navLink.link} className="font-light">
                  {navLink.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
