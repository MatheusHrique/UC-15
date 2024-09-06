import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: "#ffffff", marginBottom: 70 }}>
        Login:
      </Text>
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d4dad",
    alignItems: "center",
    justifyContent: "center",
  },
});
