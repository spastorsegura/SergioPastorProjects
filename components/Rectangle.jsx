"use client";

import { animate, motion } from "framer-motion";

const Rectangle = () => {
  const rectangleVariants = {
    initial: {
      y: "-100%",
      height: "100%",
    },
    animate: {
      y: "0%",
      height: "0%",
    },
    exit: {
      y: ["0%", "-100%"],
      height: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0,
          duration: 0.6,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-primary"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.25,
          duration: 0.8,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-secondary"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.35,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-primary"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.45,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-secondary"
      />
    </>
  );
};

export default Rectangle;
