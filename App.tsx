import { View ,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/home";
import Details from "./components/detail";
import AboutScreen from "./components/about";

const Stack = createNativeStackNavigator();
const App = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen
                name="Details"
                component={Details}
                options={{title: 'Details'}}/>
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{title: 'Chi tieets'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;