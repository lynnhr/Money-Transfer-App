import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8F8F8",
    flexGrow: 1,
  },

 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "#7B2CBF",  // purple (you can change)
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  marginLeft: 20,
  elevation: 3, // Android shadow
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


  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.header,
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },

  cardPreview: {
    width: "100%",
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },

  cardType: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
  },

  cardNumber: {
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 2,
  },

  cardNumberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  cardCvv: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },

  cardFooter: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardBalanceLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
  },

  cardBalance: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },

  cardVisa: {
    fontSize: 18,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "700",
  },

  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },

  colorCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    margin: 8,
  },

  confirmButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },

  confirmText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
