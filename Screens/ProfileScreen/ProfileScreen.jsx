import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "../LoginScreen/loginScreenStyles";
import photoBg from "../../assets/images/photoBG.jpeg";
// import plus from "../../assets/plus.png";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.backgroundPhoto}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>User</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
