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
    top: -14,
    left: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    width: 13,
    height: 13,
  },
  exit: {
    alignSelf: "flex-end",
    marginTop: 22,
    marginRight: 16,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    marginBottom: 16,
    marginHorizontal: 54,
    alignItems: "center",
    marginTop: 42,
  },
  reaction: {
    // flexDirection: "row-reverse",
  },
});
