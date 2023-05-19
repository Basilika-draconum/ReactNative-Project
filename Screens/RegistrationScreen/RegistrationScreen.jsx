import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import photoBg from "../../assets/images/photoBG.jpeg";
import plus from "../../assets/plus.png";
import { styles } from "./registrationScreenStyles";

const RegistrationScreen = () => {
  const [isShowKeyBoarding, setIsShowKeyBoarding] = useState(false);
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState(false);
  const [password, setPassword] = useState(false);

  const keyBoardHide = () => {
    setIsShowKeyBoarding(false);
    setAddress(false);
    setLogin(false);
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
                  android: { marginBottom: isShowKeyBoarding ? 155 : 43 },
                  ios: { marginBottom: isShowKeyBoarding ? 160 : 43 },
                }),
              }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <View style={styles.photoUser}>
                <View style={styles.addPhoto}>
                  <Image source={plus} style={styles.plus}></Image>
                </View>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: login ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Логін"
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(false);
                  setLogin(true);
                  setPassword(false);
                }}></TextInput>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: address ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(true);
                  setLogin(false);
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
                  setLogin(false);
                  setPassword(true);
                }}></TextInput>
            </KeyboardAvoidingView>

            <View>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={keyBoardHide}>
                <Text style={styles.registerBtnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text style={styles.anchor}>Вже є аккаунт? Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
