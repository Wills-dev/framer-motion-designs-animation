import { useRef, useState } from "react";
import { AnimatePresence, motion, transform, useCycle } from "framer-motion";
import "./HomePage.css";
import Nav from "./components/Nav";

const HomePage = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  //   const containerRef = useRef(null);

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  //   console.log("containerRef", containerRef);

  return (
    <>
      <AnimatePresence>
        <motion.div animate={isOpen ? "open" : "closed"} className="relative">
          <motion.div
            className="fixed right-0 m-5 w-[80px] h-[80px] bg-purple-400 rounded-full flex items-center justify-center cursor-pointer z-10"
            onClick={() => toggleOpen()}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                transition={{ duration: 0.3 }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.div>
          {isOpen && <Nav />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
