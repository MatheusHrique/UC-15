import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  Text,
} from "react-native";
import SmallVideo from "./SmallVideo";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Body = () => {
  const [text, setText] = useState("");

  const HandleClick = () => {
    Alert.alert("CLICADO!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: 25,
        }}
      >
        <Image
          source={require("../assets/youtube-logo-0.png")}
          style={{
            width: 100,
            height: 50,
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          value={text}
          onChangeText={setText}
        />

        <Pressable onPress={HandleClick}>
          <TouchableOpacity>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </Pressable>
      </View>
      <SmallVideo
        title="Titulo1"
        subtitle="Subtitulo1"
        image="https://robohash.org/robozao"
      />
      <SmallVideo
        title="Titulo2"
        subtitle="Subtitulo2"
        image="https://robohash.org/vinicius"
      />
      <SmallVideo
        title="Titulo3"
        subtitle="Subtitulo3"
        image="https://robohash.org/mathias"
      />
      <SmallVideo
        title="Titulo4"
        subtitle="Subtitulo4"
        image="https://robohash.org/leozao"
      />
      <SmallVideo
        title="Titulo5"
        subtitle="Subtitulo5"
        image="https://robohash.org/roberto"
      />
      <SmallVideo
        title="Titulo6"
        subtitle="Subtitulo6"
        image="https://robohash.org/miqueas"
      />

      <Text
        style={{
          fontSize: 50,
          marginTop: 20,
          marginBottom: 20,
          color: "#f1f1f1",
        }}
      >
        Comentários: 1294...
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666666",
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderCurve: "circular",
  },
});

export default Body;
