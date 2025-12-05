import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
    marginTop: 60,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  name: {
    color: colors.textDark,
  },
  amount: {
    fontWeight: "600",
  },
  empty: {
    marginTop: 20,
    color: colors.textLight,
  },
  loadingCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
   backButton: {
  width: 50,
  height: 50,
  borderRadius: 20,
  backgroundColor: "#7B2CBF",  
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 3,
  marginTop: 60,
},
backArrow: {
  fontSize: 24,
  color: "#fff",
  fontWeight: "bold",
},
});
