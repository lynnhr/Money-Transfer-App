import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
  },
  logo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 150
  },

  illustration: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  brand: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#b300b9",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 40,
  },

  subtitleSmall: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#b300b9",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 18,
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  dots: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },

  dotActive: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#b300b9",
  },
});
