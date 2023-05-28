import React, { useEffect, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./defaultPostsScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const user = useSelector(({ auth }) => auth);

  const getAllPosts = async () => {
    const q = query(collection(db, "posts"));
    await onSnapshot(q, (data) =>
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/skrat.jpeg")}
        />
        <View>
          <Text style={styles.user}>{user.login || "John Doe"}</Text>
          <Text style={styles.email}>{user.email || "email@example.com"}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.commonPicture}>
            <Image
              source={{ uri: item.picture }}
              resizeMode="cover"
              style={styles.picture}
            />
            <Text style={styles.description}>{item.title}</Text>
            <View style={styles.reaction}>
              <TouchableOpacity
                style={styles.comments}
                onPress={() =>
                  navigation.navigate("Comments", { postId: item.id })
                }>
                <FontAwesome
                  name="comment"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text style={styles.number}>Comments</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.location}
                onPress={() =>
                  navigation.navigate("Map", { location: item.location })
                }>
                <Entypo
                  name="location-pin"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text style={styles.locationName}>Ukraine</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostsScreen;
