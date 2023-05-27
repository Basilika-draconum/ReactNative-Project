import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Platform, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MainTable = createBottomTabNavigator();
//Screens
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
//Icons
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const MainRoute = ({ isAuth }) => {
  const navigation = useNavigation();
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
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
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => {
                navigation.navigate("Login");
              }}>
              <Ionicons
                name="exit-outline"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
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
            ...Platform.select({
              ios: { marginTop: 9 },
              android: { marginTop: 4, marginBottom: 4 },
            }),
          },
          tabBarIcon: () => <Feather name="plus" size={26} color="#fff" />,
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 10 }}
              onPress={() => navigation.navigate("Login")}>
              <Ionicons
                name="exit-outline"
                size={24}
                color="rgba(189, 189, 189, 1)"
              />
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
