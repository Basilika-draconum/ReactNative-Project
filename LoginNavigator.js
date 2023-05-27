import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
//Screens
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
//Icons

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
