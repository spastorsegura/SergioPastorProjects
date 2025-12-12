"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
// components
import Rectangle from "./Rectangle";

const RectangleTransition = () => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence>
        <div key={pathname}>
          <motion.div initial={{ opacity: 1 }} className="">
            <Rectangle />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default RectangleTransition;
