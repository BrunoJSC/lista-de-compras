import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Form } from "../screens/Form";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
