import React, { useEffect, useState } from "react";
import { Text, Image, View, FlatList } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./defaultPostsScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
// import forest from "../../assets/images/forest.png";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [
        ...prevState,
        route.params.picture,
        route.params.title,
      ]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/skrat.jpeg")}
        />
        <View>
          <Text style={styles.user}>Anzhelika Dubinenko</Text>
          <Text style={styles.email}>email@example.com</Text>
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
                onPress={() => navigation.navigate("Comments")}>
                <FontAwesome
                  name="comment"
                  size={24}
                  color="rgba(189, 189, 189, 1)"
                />
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.location}
                onPress={() => navigation.navigate("Map")}>
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
