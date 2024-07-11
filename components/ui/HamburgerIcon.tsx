import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HamburgerIconProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle} className="p-2">
      <motion.div
        animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        {isOpen ? (
          <X className="text-yellow-600" size={24} />
        ) : (
          <Menu size={24} />
        )}
      </motion.div>
    </button>
  );
};

export default HamburgerIcon;
