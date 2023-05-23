import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  picture: {
    height: 240,
    backgroundColor: "red",
    borderRadius: 8,
  },
  underPicture: {
    color: "rgba(189, 189, 189, 1)",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    paddingVertical: 16,
    marginTop: 16,
    marginBottom: 16,
    borderBottomColor: "rgba(189, 189, 189, 1)",
    borderBottomWidth: 1,
  },
  btnShare: {
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    paddingHorizontal: 118,
    borderRadius: 100,
    marginTop: 16,
  },
  txtShare: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "rgba(189, 189, 189, 1)",
  },
});
