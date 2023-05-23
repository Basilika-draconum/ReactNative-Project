import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./profileScreenStyles";

import photoBg from "../../assets/images/photoBG.jpeg";
import forest from "../../assets/images/forest.png";

import cross from "../../assets/cross.png";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.backgroundPhoto}>
        <View style={styles.innerContainer}>
          <View style={styles.photoUser}>
            <View style={styles.addPhoto}>
              <Image source={cross} style={styles.plus}></Image>
            </View>
          </View>
          <TouchableOpacity
            style={styles.exit}
            onPress={() => {
              navigation.navigate("Login");
            }}>
            <Ionicons
              name="exit-outline"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Natali Romanova</Text>
          <View>
            <Image source={forest}></Image>
            <Text>Лісок</Text>
            <View>
              <View>
                <FontAwesome
                  name="comment"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text>8</Text>
              </View>
              <View>
                <AntDesign
                  name="like2"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text>8</Text>
              </View>
              <View>
                <Entypo
                  name="location-pin"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
