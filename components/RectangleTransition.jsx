"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
// components
import Rectangle from "./Rectangle";

const RectangleTransition = () => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Rectangle />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default RectangleTransition;
