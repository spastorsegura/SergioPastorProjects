"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div initial={{ opacity: 1 }} className="">
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
