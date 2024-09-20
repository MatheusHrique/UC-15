import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RickAndMortySearch from "./src/screens/RickAndMorty/RickAndMortySearch";

export default function App() {
  return (
    <View style={styles.container}>
      <RickAndMortySearch />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: 4,
  },
});
