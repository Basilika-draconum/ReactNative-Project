import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./createPostsScreenStyles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [picture, setPicture] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");

      const locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = () => {
    navigation.navigate("DefaultScreen", { picture, title, location });
    setLocation(null);
    setPicture("");
    setTitle(null);
  };

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  };

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPicture(uri);
      try {
        await MediaLibrary.createAssetAsync(uri);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      setLocation(await getLocation());
    } catch (err) {
      console.log(err);
    }
  };

  const handleLocationIconPress = async () => {
    const location = await getLocation();
    navigation.navigate("Map", { location });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.picture} ref={setCameraRef}>
        {picture ? (
          <ImageBackground source={{ uri: picture }} style={styles.pictureView}>
            <TouchableOpacity style={styles.btnPicture} onPress={takePicture}>
              <MaterialIcons
                name="photo-camera"
                size={24}
                color="rgba(255, 255, 255, 1)"
              />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <TouchableOpacity style={styles.btnPicture} onPress={takePicture}>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
          </TouchableOpacity>
        )}
      </Camera>
      {picture ? (
        <Text style={styles.underPicture}>Редагувати фото</Text>
      ) : (
        <Text style={styles.underPicture}>Завантажте фото</Text>
      )}
      <TextInput
        placeholder="Назва..."
        style={styles.input}
        value={title}
        onChangeText={setTitle}></TextInput>
      <TextInput
        placeholder="Локація..."
        style={styles.inputLoc}
        value={JSON.stringify(location || "")}
        onChangeText={setLocation}></TextInput>
      <Text style={styles.iconLoc} onPress={handleLocationIconPress}>
        <Entypo name="location-pin" size={24} color="rgba(189, 189, 189, 1)" />
      </Text>

      {title && location && picture ? (
        <TouchableOpacity style={styles.btnShareFocus} onPress={handleSubmit}>
          <Text style={styles.txtShareFocus}>Опублікувати</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnShare} onPress={handleSubmit}>
          <Text style={styles.txtShare}>Опублікувати</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CreatePostsScreen;
