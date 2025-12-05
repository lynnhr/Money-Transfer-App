import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 10,
  },

  bubble: {
    position: "absolute",
    top: -18,
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
