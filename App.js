import React from "react";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import photoBg from "./assets/images/photoBG.jpeg";
import { styles } from "./Screens/LoginScreen/loginScreenStyles";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            source={photoBg}
            resizeMode="cover"
            style={styles.backgroundPhoto}>
            <RegistrationScreen />
            {/* <LoginScreen /> */}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
