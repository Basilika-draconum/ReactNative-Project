import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  picture: {
    marginVertical: 32,
    alignSelf: "center",
  },
  inputContainer: {
    color: "rgba(189, 189, 189, 1)",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  input: {
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    paddingVertical: 16,
    paddingLeft: 16,
    borderRadius: 100,
  },
  btnInput: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    alignSelf: "flex-end",
    position: "relative",
    // top: -44,
    right: 8,
  },
  userComment: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  userImage: {
    height: 28,
    width: 28,
    borderRadius: 50,
    marginRight: 10,
  },

  commentText: {
    backgroundColor: " rgba(0, 0, 0, 0.03)",
    padding: 16,
    borderRadius: 6,
  },
});
