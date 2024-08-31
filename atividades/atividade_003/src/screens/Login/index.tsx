import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { InputName } from "./style";
import { useState } from "react";

const Index = () => {
  const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const showLogedAlert = () => {
    Alert.alert("Login", `Nome: ${username}`, [
      { text: "Ok", onPress: () => console.log("LOGADO!!!!") },
    ]);
  };

  return (
    <SafeAreaView>
      <Text>Nome:</Text>
      <InputName onChangeText={setUsername} value={username} />
      <Text>Senha:</Text>
      <InputName onChangeText={setSenha} value={senha} />
      <TouchableOpacity onPress={showLogedAlert} style={styles.buttonLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 10,
    borderRadius: 20,
    borderColor: "#000000",
    alignSelf: "center",
    textAlign: "center",
    height: 50,
    width: 100,
  },
});
