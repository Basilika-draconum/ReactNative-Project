import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./createPostsScreenStyles";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.picture}></View>
      <Text style={styles.underPicture}>Завантажте фото</Text>
      <TextInput placeholder="Назва..." style={styles.input}></TextInput>
      <TextInput placeholder="Локація..." style={styles.input}>
        <Entypo name="location-pin" size={24} color="rgba(189, 189, 189, 1)" />
      </TextInput>
      <TouchableOpacity style={styles.btnShare}>
        <Text style={styles.txtShare}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
