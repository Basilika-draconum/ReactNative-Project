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
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { loginThunk } from "../../redux/auth/authOparations.js";
import photoBg from "../../assets/images/photoBG.jpeg";
import { styles } from "./loginScreenStyles";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [isShowKeyBoarding, setIsShowKeyBoarding] = useState(false);
  const [address, setAddress] = useState(false);
  const [password, setPassword] = useState(false);
  const [state, setState] = useState(initialStateLogin);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const keyBoardHide = () => {
    setIsShowKeyBoarding(false);
    setAddress(false);
    setPassword(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyBoardHide();
    dispatch(loginThunk(state));
    setState(initialStateLogin);
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
                  android: { marginBottom: isShowKeyBoarding ? 70 : 43 },
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
                }}
                value={state.email}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
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
                }}
                value={state.password}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}></TextInput>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.registerBtn} onPress={handleSubmit}>
              <Text style={styles.registerBtnTitle}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("Registration");
              }}>
              <Text style={styles.anchor}>Немає аккаунта? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
