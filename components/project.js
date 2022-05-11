import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

const projects = [
  {
    title: "4G Remote Mi Car",
    src: "./project1.jpeg",
    link: "https://github.com/jaydennleemc/Mi_Car",
  },
  {
    title: "Cooktails Menu (Mobile App)",
    src: "./project2.png",
    link: "https://github.com/jaydennleemc/Cocktails-App",
  },
  {
    title: "POS (iPad App)",
    src: "./project3.png",
    link: "https://github.com/jaydennleemc/mcdonald-pos",
  },
  {
    title: "Unicase Shop (Web App)",
    src: "./project4.png",
    link: "https://unicase.ddns.net/shop/",
  },
];

const Projects = () => {
  return (
    <Box>
      <Text style={styles.section}>Projects</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {projects.map((project, index) => (
          <LinkBox cursor={"pointer"}>
            <GridItem key={project.src}>
              <Image src={project.src} style={styles.image} objectFit="cover" />
              <LinkOverlay href={project.link} target="_blank">
                <Text fontSize={"lg"} fontWeight={"500"}>
                  {project.title}
                </Text>
              </LinkOverlay>
            </GridItem>
          </LinkBox>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  section: {
    fontSize: "1.5rem",
    color: "#009090",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
};

export default Projects;
