import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, Text, Stack, Divider } from "@chakra-ui/react";
import Education from "../components/educations";
import Profile from "../components/profile";
import Projects from "../components/project";
import Works from "../components/works";

export default function Home() {
  return (
    <Container>
      {/* Profile */}
      <motion.div
        key={"projects"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Profile />
      </motion.div>

      {/* Education */}
      <motion.div
        key={"projects"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Box ml={3}>
          <Education />
        </Box>
      </motion.div>

      {/* Working History */}
      <motion.div
        key={"projects"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <Box ml={3} mt={3}>
          <Works />
        </Box>
      </motion.div>

      {/* Projects */}
      <motion.div
        key={"projects"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <Box ml={3} mt={3}>
          <Projects />
        </Box>
      </motion.div>
    </Container>
  );
}

const styles = {
  section: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#009090",
  },
};
