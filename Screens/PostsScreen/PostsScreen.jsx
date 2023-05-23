import React from "react";
import { Text, View } from "react-native";
import { styles } from "./postsScreenStyles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>Natali Romanova</Text>
    </View>
  );
};

export default PostsScreen;
