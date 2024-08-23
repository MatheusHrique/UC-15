import { Text, View, StyleSheet } from "react-native";
import { Container, Title } from "./styles";

const Home = () => {
  return (
    <Container>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Title>Boa noite, tenha uma ótima noite</Title>
      </View>
    </Container>
  );
};

export default Home;
