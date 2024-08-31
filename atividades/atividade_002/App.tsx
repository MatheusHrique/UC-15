import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Home />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
