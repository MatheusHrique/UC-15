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
        <Title>
          "No momento de maior escuridão, os homens veem as estrelas." -Ralph
          Waldo Emerson
        </Title>
      </View>
    </Container>
  );
};

export default Home;
