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
import { useNavigation } from "@react-navigation/native";

const initialStateForm = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [isShowKeyBoarding, setIsShowKeyBoarding] = useState(false);
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState(false);
  const [password, setPassword] = useState(false);
  const [state, setState] = useState(initialStateForm);

  const navigation = useNavigation();

  const keyBoardHide = () => {
    setIsShowKeyBoarding(false);
    setAddress(false);
    setLogin(false);
    setPassword(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyBoardHide();
    console.log(state);
    setState(initialStateForm);
    navigation.navigate("Home");
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
                value={state.login}
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(false);
                  setLogin(true);
                  setPassword(false);
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, login: value }));
                }}></TextInput>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: address ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Адреса електронної пошти"
                value={state.email}
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(true);
                  setLogin(false);
                  setPassword(false);
                }}
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
                value={state.password}
                onFocus={() => {
                  setIsShowKeyBoarding(true);
                  setAddress(false);
                  setLogin(false);
                  setPassword(true);
                }}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}></TextInput>
            </KeyboardAvoidingView>

            <View>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={handleSubmit}>
                <Text style={styles.registerBtnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                <Text style={styles.anchor}>Вже є аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
