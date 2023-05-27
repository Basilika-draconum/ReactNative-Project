import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

import { store } from "./redux/store";
import { auth } from "./firebase/config";
import RootNavigator from "./RootNavigator";

export default function App() {
  // const routing = useRoute(user);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
