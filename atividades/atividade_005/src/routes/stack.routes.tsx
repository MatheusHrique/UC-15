import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../assets/home/Home";
import Details from "../assets/details/Details";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicial", headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
export { RootStackParamList };
