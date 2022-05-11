import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
