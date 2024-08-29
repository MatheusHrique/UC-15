import { View, Text, Image, StyleSheet } from "react-native";

interface SmallVideoProbs {
  title: string;
  subtitle: string;
  image: string;
}

const SmallVideo = ({ title, subtitle, image }: SmallVideoProbs) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />

      <View style={{ flexDirection: "column", margin: 20 }}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffda",
    borderCurve: "circular",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  img: {
    width: 300,
    height: 150,
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: "#ff0000",
  },
  title: {
    color: "#000000",
    fontSize: 30,
  },
  subtitle: {
    color: "#333333",
    fontSize: 20,
  },
});

export default SmallVideo;
