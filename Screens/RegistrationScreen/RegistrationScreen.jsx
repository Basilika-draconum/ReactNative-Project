import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import photoBg from "../../assets/images/photoBG.jpeg";
import plus from "../../assets/plus.png";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.backgroundPhoto}>
        <View style={styles.firstContainer}></View>
        <View style={styles.innerContainer}>
          <View style={styles.photoUser}>
            <View style={styles.addPhoto}>
              <Image source={plus} style={styles.plus}></Image>
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerBtnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.anchor}>Вже є аккаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundPhoto: {
    flex: 1,
    justifyContent: "center",
  },
  firstContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photoUser: {
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    borderRadius: 16,
    top: -60,
    left: 128,
    elevation: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
  },
  addPhoto: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 25,
    width: 25,
    top: -14,
    left: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    width: 13,
    height: 13,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 16,
    marginHorizontal: 100,
    alignItems: "center",
    marginTop: 90,
  },
  input: {
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    marginHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 43,
    paddingVertical: 16,
    alignItems: "center",
  },
  registerBtnTitle: {
    color: "#fff",
    fontSize: 16,
  },
  anchor: {
    color: "#1B4371",
    fontSize: 16,
    marginTop: 16,
    marginHorizontal: 94,
  },
});

export default RegistrationScreen;
