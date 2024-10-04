import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../routes/stack.routes";
import { useNavigation, useRoute } from "@react-navigation/native";

type Probs = NativeStackScreenProps<RootStackParamList, "Details">;

// const Details = ({ navigation, route }: Probs) => {
//   const name = route.params.nome;
//   return (
//     <View>
//       <Text style={{ fontSize: 40 }}>Alele</Text>
//       <Text style={{ fontSize: 40 }}>{name}</Text>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={{ fontSize: 40 }}>Voltar para Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Details = () => {
  const { navigation } = useNavigation<any>(); // desse jeito não tem como tipar, a não ser que tu altere a documentação do useNavigation
  const route = useRoute<any>();
  const { name } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Alele</Text>
      <Text style={{ fontSize: 40 }}>{name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 40 }}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
