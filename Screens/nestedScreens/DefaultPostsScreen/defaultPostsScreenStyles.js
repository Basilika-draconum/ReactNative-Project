import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 16,
    marginTop: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  user: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  commonPicture: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  picture: {
    height: 240,
    borderWidth: 1,
  },
  description: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 4,
  },
  reaction: {
    flexDirection: "row",
    marginTop: 8,
    marginHorizontal: 4,
    justifyContent: "space-between",
  },

  number: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  locationName: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationColor: "rgba(189, 189, 189, 1)",
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
  },
});
