import { Avatar, Box, Container, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container>
      <Box style={styles.avatarBox} flexDirection={"column"}>
        <Avatar name="Dan Abrahmov" src="./bubu.png" size={"2xl"} />
        <Text style={styles.name}>Jayden</Text>
        <Text style={styles.title}>Software Developer</Text>
        <Text textAlign={'center'}>
          Jayden is a full-stack developer who working for building mobile app,
          web and back-end application. He has a knack for all things launching
          products, from planning and designing all the way to solving real-life
          problems with code.
        </Text>
      </Box>
    </Container>
  );
};

const styles = {
  avatarBox: {
    display: "flex",
    alignItems: "center",
    paddingTop: "4rem",
  },
  name: {
    marginTop: "1rem",
    fontSize: "2rem",
    fontWeight: "bold",
    borderradius: 5,
  },
  title: {
    marginTop: "0.2rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },

};

export default Profile;
