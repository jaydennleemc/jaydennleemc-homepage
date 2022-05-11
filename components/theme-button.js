import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");
  const {toggleColorMode} = useColorMode();

  const toggleTheme = () => {
    toggleColorMode()
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={theme}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          icon={theme === "light" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeButton;
