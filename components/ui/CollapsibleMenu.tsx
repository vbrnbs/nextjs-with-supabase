"use client";

import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";
import { NavigationMenuDemo } from "../test";

const CollapsibleMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger asChild>
        <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
      </Collapsible.Trigger>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <Collapsible.Content>
          <div className="p-4 bg-background/90 rounded shadow-md">
            <NavigationMenuDemo />
          </div>
        </Collapsible.Content>
      </motion.div>
    </Collapsible.Root>
  );
};

export default CollapsibleMenu;
