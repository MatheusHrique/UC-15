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
import { Sansita_400Regular, useFonts } from "@expo-google-fonts/sansita"; // Necessário importar manualmente a fonte para utilização da propria; Autocomplete ajuda
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStorage {
  // (I)Storage significa inferface; Está interface está servindo para atribuir value em storeData()
  username: string;
  senha: string;
}

const Index = () => {
  const [username, setUsername] = useState<string>(""); // Nome do usuario
  const [senha, setSenha] = useState<string>(""); // Senha do usuario
  const [mensagem, setMensagem] = useState<string>(
    "Necessita adicionar os dados acima."
  ); //

  useFonts({
    // Necessário useFonts para o funcionamento da fonte
    Sansita_400Regular,
  });

  const storeData = async (value: IStorage) => {
    const jsonValue = JSON.stringify(value); // Transforma o objeto em uma string
    if (Platform.OS !== "web") {
      try {
        await AsyncStorage.setItem("@atividade_003-userInfo", jsonValue); //nomedoprojeto-identificação; string a ser salvo; salva no storage.
      } catch (e) {
        console.log(e);
      }
    } else {
      window.localStorage.setItem("@atividade_003-userInfo", jsonValue); //nomedoprojeto-identificação; string a ser salvo; salva no storage.
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@atividade_003-userInfo");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

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
      setMensagem("Necessita adicionar o nome.");
      if (Platform.OS == "web") {
        window.alert(`Necessita adicionar o nome.`);
      } else {
        Alert.alert("Aviso", "Preencha o nome!", [{ text: "Ok" }]);
      }
    } else if (senha.length == 0) {
      setMensagem("Necessita adicionar a senha.");
      if (Platform.OS == "web") {
        window.alert(`Necessita adicionar a senha.`);
      } else {
        Alert.alert("Aviso", "Preencha a senha!", [{ text: "Ok" }]);
      }
    } else {
      setMensagem("Tudo certo!");
      showLogedAlert();
    }
  };

  const showLogedAlert = () => {
    getData().then((storage) => {
      // explicação do .then: joga no edge copilot: "explique o .then()", é mais fácil de entender deste jeito
      // Está servindo para detectar se for o mesmo usuário que está logando para enviar uma alert extra
      // Está declarando 'storage' como o objeto que vier de 'getData()'
      if (storage) {
        if (storage.username == username) {
          // '&& storage.senha == senha'
          if (Platform.OS !== "web") {
            Alert.alert("Aviso", `Opa! Bem vindo de volta amigo!`, [
              { text: "Obrigado!" },
            ]);
          } else {
            window.alert("Opa! Bem vindo de volta amigo!");
          }
        }
      }
    });
    storeData({ username: username, senha: senha }); // Adicione suas variaveis strings/int/seila o que aqui para salvar.

    if (Platform.OS !== "web") {
      // Verifica se a plataforma não é web
      Alert.alert("Login", `Nome: ${username}`, [
        { text: "Tudo certo", onPress: () => console.log("Logado!") },
      ]);
    } else {
      // Se for web
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
        {mensagem}
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
    fontFamily: "Sansita_400Regular", // Setando fonte aqui
  },
});

// *imports:
// npm install --force
// npm install styled-components
// npx expo install react-native-web react-dom @expo/metro-runtime
// npm install @react-native-async-storage/async-storage
// npx expo install expo-font
// npx expo install expo-font @expo-google-fonts/sansita

// *exec:
// npx expo --tunnel
// npx expo start --web
