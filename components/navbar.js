import {
  HamburgerIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Code,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeButton from "./theme-button";

const ListItem = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

const mobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        icon={<HamburgerIcon />}
        as={IconButton}
        aria-label="Options"
        variant="outline"
      />
      <MenuList>
        <NextLink href="#" passHref>
          <MenuItem as={Link}>Works</MenuItem>
        </NextLink>
        <NextLink href="#" passHref>
          <MenuItem as={Link}>Projects</MenuItem>
        </NextLink>
        <NextLink href="#" passHref>
          <MenuItem as={Link}>Contacts</MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
};


const NavBar = () => {
  return (
    <Box position={"fixed"} width={"100%"} zIndex={1} backgroundColor={useColorModeValue('#ffffff40', '#00000020')}>
      <Container>
        <Flex>
          <Box p="4">
            <Link href="/"><Code>Hello, World</Code></Link>
          </Box>
          <Box p="4" display={{ base: "none", md: "flex" }}>
            <Stack spacing={4} direction={"row"}>
              <ListItem href={"#"}>Works</ListItem>
              <ListItem href={"#"}>Projects</ListItem>
              <ListItem href={"#"}>Contacts</ListItem>
            </Stack>
          </Box>
          <Spacer />
          <Box p="2">
            <ThemeButton />
          </Box>
          <Box p="2" display={{ md: "none" }}>
            {mobileMenu()}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
