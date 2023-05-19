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
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        marginHorizontal: 135,
      },
      android: {
        marginHorizontal: 130,
      },
    }),
    fontFamily: "Roboto-Medium",
    alignItems: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    marginHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingLeft: 16,
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: "center",
  },
  registerBtnTitle: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
    fontSize: 16,
  },
  anchor: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 144,
    ...Platform.select({
      ios: {
        marginHorizontal: 54,
      },
      android: {
        marginHorizontal: 49,
      },
    }),
  },
});
