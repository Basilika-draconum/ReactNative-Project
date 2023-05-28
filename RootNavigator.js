import React, { useCallback, useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createNavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { LoginNavigator } from "./LoginNavigator";
import { HomeNavigator } from "./HomeNavigator";
import { authStateChangeUserThunk } from "./redux/auth/authOparations";

const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function RootNavigator() {
  const dispatch = useDispatch();

  const resetNavigation = useCallback((name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
        },
      ],
    });
    navigationRef.dispatch(resetAction);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resetNavigation("HomeNavigator");
        dispatch(authStateChangeUserThunk());
        return;
      }

      resetNavigation("LoginNavigator");
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="LoginNavigator"
          component={LoginNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
