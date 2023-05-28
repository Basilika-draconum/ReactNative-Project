import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundPhoto: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 43,
    marginTop: 147,
  },
  photoUser: {
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    borderRadius: 16,
    top: -60,
    left: 128,
    elevation: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
  },
  addPhoto: {
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 25,
    width: 25,
    top: 24,
    left: 235,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    width: 13,
    height: 13,
  },
  exit: {
    alignSelf: "flex-end",
    marginTop: 2,
    marginRight: 6,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    marginBottom: 16,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 42,
  },
  picture: {
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 10,
  },
  description: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginTop: 8,
  },
  reaction: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  reacts: {
    flexDirection: "row",
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
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: { paddingBottom: 40 },
});
