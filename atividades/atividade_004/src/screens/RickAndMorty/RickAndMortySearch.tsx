import React, { useState } from "react";
import { FlatList, SafeAreaView, View, StyleSheet, Text } from "react-native";
import { CampoDeTexto, Procurar } from "./style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.itemcss}>
    <Text style={styles.titlecss}>{title}</Text>
  </View>
);

const RickAndMortySearch = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<string>("");

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Pesquise pelo ID do seu personagem!</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <CampoDeTexto
          onChangeText={setSearch}
          placeholder="Coloque o ID do seu personagem aqui"
        />
        <Procurar>Procurar</Procurar>
      </View>
      <FlatList
        style={{ alignSelf: "center" }}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemcss: {
    backgroundColor: "#1d7ab8",
    padding: 10,
    width: 200,
    height: 100,
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
