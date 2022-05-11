import { Box, Stack, Divider, Text } from "@chakra-ui/react";

const history = [
  {
    year: "2022",
    title: "DevOps Engineer",
    company: "VISEO",
  },
  {
    year: "2021",
    title: "Analyst Programmer",
    company: "InfoTech",
  },
  {
    year: "2019",
    title: "DevOps Engineer",
    company: "Siemens",
  },
  {
    year: "2018",
    title: "Analyst Programmer",
    company: "Accentrix",
  },
  {
    year: "2017",
    title: "Application Developer",
    company: "HKT",
  },
];

const Works = () => {
  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"#009090"}>
        Work History
      </Text>
      <Box ml={2} mt={3}>
        {history.map((item, index) => (
          <Stack direction="row" h="80px">
            <Text w={"40px"}>{item.year}</Text>
            <Divider orientation="vertical" />
            <Box>
              <Text fontSize={"lg"} fontWeight={"500"}>
                {item.title}
              </Text>
              <Text fontSize={"sm"}>{item.company}</Text>
            </Box>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default Works;
