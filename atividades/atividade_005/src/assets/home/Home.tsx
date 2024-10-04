import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RootStackParamList } from "../../routes/stack.routes";

type Probs = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Probs) => {
  const goToDetails = () => {
    navigation.navigate("Details", {
      nome: "Rafael",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Abababa</Text>
      <TouchableOpacity onPress={goToDetails}>
        <Text>Ir para detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdbdbd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
