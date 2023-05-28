import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/authOparations";
//icons and styles
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./profileScreenStyles";
import photoBg from "../../assets/images/photoBG.jpeg";
import cross from "../../assets/cross.png";
//firebase
import { db } from "../../firebase/config";
import { collection, query, onSnapshot, where } from "firebase/firestore";

const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const unsubscribe = onSnapshot(q, (data) => {
      const posts = [];
      data.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(posts);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.backgroundPhoto}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={require("../../assets/images/skrat.jpeg")}
              style={styles.photoUser}
            />
            <View style={styles.addPhoto}>
              <Image source={cross} style={styles.plus} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.exit}
            onPress={() => {
              dispatch(logoutThunk());
            }}>
            <Ionicons
              name="exit-outline"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{login || "John Doe"}</Text>
          <SafeAreaView>
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image
                    source={{ uri: item.picture }}
                    resizeMode="cover"
                    style={styles.picture}
                  />
                  <Text style={styles.description}>{item.title}</Text>
                  <View style={styles.reaction}>
                    <View style={styles.reacts}>
                      <View style={styles.comments}>
                        <FontAwesome
                          name="comment"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                        <Text style={styles.number}>8</Text>
                      </View>
                      <View style={styles.likes}>
                        <AntDesign
                          name="like2"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                        <Text style={styles.number}>8</Text>
                      </View>
                    </View>
                    <View style={styles.location}>
                      <Entypo
                        name="location-pin"
                        size={24}
                        color="rgba(189, 189, 189, 1)"
                      />
                      <Text style={styles.locationName}>Ukraine</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, ind) => ind.toString()}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
