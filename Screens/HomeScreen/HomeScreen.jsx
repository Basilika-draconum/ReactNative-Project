import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { TouchableOpacity } from "react-native";

const MainTable = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <MainTable.Navigator
      initialRouteName="Posts"
      screenOptions={{ tabBarShowLabel: false }}>
      <MainTable.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarIcon: () => (
            <SimpleLineIcons name="grid" size={24} color="#212121CC" />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Ionicons name="exit-outline" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTable.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: " Створити публікацію",
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            borderRadius: 20,
            marginHorizontal: 10,
            marginTop: 9,
          },
          tabBarIcon: () => <Feather name="plus" size={26} color="#fff" />,
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Ionicons name="exit-outline" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTable.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="ios-person-outline" size={24} color="#212121CC" />
          ),
        }}
      />
    </MainTable.Navigator>
  );
};

export default HomeScreen;

//for exit <Ionicons name="exit-outline" size={24} color="black" />
