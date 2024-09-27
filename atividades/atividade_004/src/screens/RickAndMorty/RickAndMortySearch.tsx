import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { CampoDeTexto, Procurar } from "./style";
import axios from "axios";
import { axiosInstance } from "../../utils/axios";
import { listaDTO } from "../../types/lista";

const RickAndMortySearch = () => {
  const [search, setSearch] = useState<string>("1");
  const [lista, setLista] = useState<listaDTO[]>([]);

  type ItemProps = {
    item: listaDTO;
  };

  const Card = ({ item }: ItemProps) => (
    <View style={styles.itemcss}>
      <Text style={styles.titlecss}>
        {item.id}, {item.name}, {item.status}
      </Text>
      <Image source={{ uri: item.image }} style={{ width: 400, height: 400 }} />
    </View>
  );

  const getData = async (input: string) => {
    try {
      const response = await axiosInstance.get<listaDTO[]>("/" + input);
      console.log(response.data);
      setLista(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(search);
  }, [search]);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Pesquise pelo ID do seu personagem!</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CampoDeTexto
          onChangeText={setSearch}
          placeholder="Coloque o ID do seu personagem aqui"
          value={search}
        />
        <Procurar onPress={() => getData(search)}>
          <Text>Procurar</Text>
        </Procurar>
      </View>
      {lista.length > 0 && (
        <FlatList
          style={{ alignSelf: "center" }}
          data={lista}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemcss: {
    backgroundColor: "#1d7ab8",
    padding: 10,
    width: 800,
    height: 800,
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
