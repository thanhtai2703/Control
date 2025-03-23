import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/home";
import Details from "./components/detail";
import AboutScreen from "./components/about";
import DemoScreen from "./components/Demo";

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    //<DemoScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{ title: "Control" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
