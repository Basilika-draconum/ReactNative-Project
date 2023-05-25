import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreen/DefaultPostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Мапа",
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
