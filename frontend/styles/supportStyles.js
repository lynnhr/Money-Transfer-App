import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.background,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    alignSelf: "center",
  },

 
  formCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#eee",
  },

  input: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 12,
    fontSize: 15,
  },

  messageBox: {
    height: 50,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  status: {
    marginTop: 10,
    textAlign: "center",
    color: colors.textLight,
  },


  faqHeader: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 10,
    marginTop: 10,
  },

  faqContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },

  faqItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },

  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c2c2c",
  },

  faqAnswer: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
   logo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 150,
    marginTop: 50
  }
});
