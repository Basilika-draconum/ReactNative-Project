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
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1,
    borderRadius: 8,
  },
  pictureView: {
    height: 238,
    borderWidth: 1,
    borderRadius: 8,
  },
  btnPicture: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 2,
    borderRadius: 100,
    padding: 18,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 90,
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
  inputLoc: {
    paddingLeft: 28,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    paddingVertical: 16,
    marginTop: 16,
    marginBottom: 16,
    borderBottomColor: "rgba(189, 189, 189, 1)",
    borderBottomWidth: 1,
  },
  iconLoc: {
    position: "relative",
    top: -55,
    width: 30,
  },
  btnShare: {
    alignSelf: "center",
    backgroundColor: "rgba(246, 246, 246, 1)",
    paddingVertical: 16,

    borderRadius: 100,
    marginTop: 16,
    ...Platform.select({
      ios: { paddingHorizontal: 118 },
      android: { paddingHorizontal: 100 },
    }),
  },
  btnShareFocus: {
    alignSelf: "center",
    backgroundColor: "rgba(255, 108, 0, 1) ",
    paddingVertical: 16,

    borderRadius: 100,
    marginTop: 16,
    ...Platform.select({
      ios: { paddingHorizontal: 118 },
      android: { paddingHorizontal: 100 },
    }),
  },
  txtShare: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "rgba(189, 189, 189, 1)",
  },
  txtShareFocus: { fontFamily: "Roboto-Medium", fontSize: 16, color: "white" },
});
