import { Box, Text } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"#009090"}>
        Education
      </Text>
      <Text fontSize={"lg"} fontWeight={"500"} ml={2}>
        Bachelor of Computer Science
      </Text>
      <Text fontSize={"sm"} ml={2}>
        Hong Kong Metropolitan University (2020)
      </Text>
    </Box>
  );
};

export default Education;
