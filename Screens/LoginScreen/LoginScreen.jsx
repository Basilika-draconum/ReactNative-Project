import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import photoBg from "../../assets/images/photoBG.jpeg";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.backgroundPhoto}>
        <View style={styles.firstContainer}></View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerBtnTitle}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.anchor}>Немає аккаунта? Зареєструватися</Text>
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
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        marginHorizontal: 135,
      },
      android: {
        marginHorizontal: 130,
      },
    }),

    alignItems: "center",
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
    ...Platform.select({
      ios: {
        marginHorizontal: 54,
      },
      android: {
        marginHorizontal: 49,
      },
    }),
  },
});

export default LoginScreen;
