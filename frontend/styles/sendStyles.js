import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: colors.background,
  justifyContent: "center",  
},

  title: {
       fontSize: 28,
    fontWeight: "bold",
    color: "color.header",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  status: {
    marginTop: 10,
    textAlign: "center",
    color: colors.textLight,
  },
  logo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 150
  },
  
});