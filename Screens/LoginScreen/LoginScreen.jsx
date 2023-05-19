import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import photoBg from "../../assets/images/photoBG.jpeg";
import { styles } from "./loginScreenStyles";

const LoginScreen = () => {
  const [isShowKeyBoarding, setIsShowKeyBoarding] = useState(false);
  const [address, setAddress] = useState(false);
  const [password, setPassword] = useState(false);

  const keyBoardHide = () => {
    setIsShowKeyBoarding(false);
    setAddress(false);
    setPassword(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={photoBg}
          resizeMode="cover"
          style={styles.backgroundPhoto}>
          <View style={styles.innerContainer}>
            <KeyboardAvoidingView
              style={{
                ...styles.updateKeyBoarding,
                ...Platform.select({
                  android: { marginBottom: isShowKeyBoarding ? 20 : 43 },
                  ios: { marginBottom: isShowKeyBoarding ? 75 : 43 },
                }),
              }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: address ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(true);
                  setPassword(false);
                }}></TextInput>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: password ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(false);
                  setPassword(true);
                }}></TextInput>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.registerBtn} onPress={keyBoardHide}>
              <Text style={styles.registerBtnTitle}>Увійти</Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.anchor,
                ...Platform.select({
                  android: { marginBottom: isShowKeyBoarding ? 20 : 144 },
                }),
              }}>
              Немає аккаунта? Зареєструватися
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
