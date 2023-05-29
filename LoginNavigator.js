import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

const Stack = createStackNavigator();

export const LoginNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
