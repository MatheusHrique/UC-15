import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { InputName, Container } from "./style";
import { useEffect, useState } from "react";
import { Sansita_400Regular, useFonts } from "@expo-google-fonts/sansita";

const Index = () => {
  const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [teste, setTeste] = useState<string>(
    "Necessita adicionar os dados acima."
  );

  useFonts({
    Sansita_400Regular,
  });

  useEffect(() => {
    if (Platform.OS !== "web") {
      Alert.alert("Bem vindo!", "Faça o login para entrar na plataforma", [
        {
          text: "Ok",
          onPress: () => Alert.alert("Aviso", "Ok", [{ text: "Ok" }]),
        },
        {
          text: "Tudo bem",
          onPress: () =>
            Alert.alert("Aviso", "Tudo bem", [{ text: "Tudo bem" }]),
        },
        {
          text: "Tá bom",
          onPress: () => Alert.alert("Aviso", "Tá bom", [{ text: "Tá bom" }]),
        },
      ]);
    } else {
      window.alert(
        `Bem vindo no site web! Faça login para entrar na plataforma`
      );
    }
  }, []);

  const updateTeste = () => {
    if (username.length == 0) {
      setTeste("Necessita adicionar o nome.");
      if (Platform.OS == "web") {
        window.alert(`Necessita adicionar o nome.`);
      } else {
        Alert.alert("Aviso", "Preencha o nome!", [{ text: "Ok" }]);
      }
    } else if (senha.length == 0) {
      setTeste("Necessita adicionar a senha.");
      if (Platform.OS == "web") {
        window.alert(`Necessita adicionar a senha.`);
      } else {
        Alert.alert("Aviso", "Preencha a senha!", [{ text: "Ok" }]);
      }
    } else {
      setTeste("Tudo certo!");
      showLogedAlert();
    }
  };

  const showLogedAlert = () => {
    if (Platform.OS !== "web") {
      Alert.alert("Login", `Nome: ${username}`, [
        { text: "Tudo certo", onPress: () => console.log("Logado!") },
      ]);
    } else {
      window.alert(`Nome: ${username}`);
    }
  };

  return (
    <Container>
      <Text style={{ fontFamily: "Sansita_400Regular" }}>Nome:</Text>
      <InputName onChangeText={setUsername} value={username} />
      <Text style={{ fontFamily: "Sansita_400Regular" }}>Senha:</Text>
      <InputName onChangeText={setSenha} value={senha} />
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#99a1a1",
          margin: 10,
          padding: 5,
          borderWidth: 5,
          borderRadius: 5,
          textAlign: "center",
          alignSelf: "center",
          fontSize: 10,
          fontStyle: "italic",
          height: 25,
          fontWeight: "bold",
          fontFamily: "Sansita_400Regular",
        }}
      >
        {teste}
      </Text>
      <TouchableOpacity onPress={updateTeste} style={styles.buttonLogin}>
        <Text style={{ fontFamily: "Sansita_400Regular" }}>Entrar</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Index;

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#777796",
    alignSelf: "center",
    height: 50,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#99a1a1",
    fontWeight: "bold",
    fontFamily: "Sansita_400Regular",
  },
});
