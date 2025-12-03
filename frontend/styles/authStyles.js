import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "color.header",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    padding: 35,
  },
  input: {
    padding: 12,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: color.textDark
  },
  button: {
    backgroundColor: color.primary,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    // boxShadow: '5px 10px 10px rgba(201, 55, 182, 0.4)',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  footerText: {
    // marginTop: 20,
    textAlign: "center",
    color: color.textLight,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  logo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 150
  }
});
