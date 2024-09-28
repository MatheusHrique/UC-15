import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { CampoDeTexto, Procurar } from "./style";
import { axiosInstance } from "../../utils/axios";
import { listaDTO } from "../../types/lista";

const RickAndMortySearch = () => {
  const [search, setSearch] = useState<string>("");
  const [lista, setLista] = useState<listaDTO[]>([]);

  const Card = ({ item }: { item: listaDTO }) => {
    return (
      <View style={styles.itemcss}>
        <Text style={styles.titlecss}>
          Id: {item.id}. Nome: {item.name}. <br />
          Gênero: {item.gender}. Status: {item.status}. <br />
          Espécie: {item.species}. <br />
        </Text>
        <Image
          source={{ uri: item.image }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  };

  const getData = async (input: string) => {
    try {
      if (input.trim() === "") {
        // Se o input estiver vazio, busque todos os personagens
        const response = await axiosInstance.get<listaDTO[]>("/");
        console.log("Todos os personagens recebidos:", response.data);
        setLista(response.data);
      } else {
        console.log("Fetching data por ID:", input);
        const response = await axiosInstance.get<listaDTO[]>("/" + input);
        console.log("Data recebido:", response.data);
        if (Array.isArray(response.data)) {
          setLista(response.data);
        } else {
          setLista([response.data]); // Se receber um único item
        }
      }
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  console.log("Lista setada:", lista);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightgray" }}>
      <Text style={{ fontSize: 30 }}>Pesquise pelo ID do seu personagem!</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CampoDeTexto
          onChangeText={setSearch}
          placeholder="Coloque o ID do seu personagem aqui"
          value={search}
        />
        <Procurar onPress={() => getData(search)}>
          <Text>Procurar</Text>
        </Procurar>
      </View>
      <FlatList
        style={{ alignSelf: "center", flex: 1 }}
        data={lista}
        renderItem={Card}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: lista.length === 0 ? "center" : undefined,
          alignItems: lista.length === 0 ? "center" : undefined,
        }}
        ListEmptyComponent={<Text>Nenhum personagem encontrado!</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemcss: {
    backgroundColor: "#1d7ab8",
    padding: 10,
    width: 300,
    height: 300,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  titlecss: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default RickAndMortySearch;
