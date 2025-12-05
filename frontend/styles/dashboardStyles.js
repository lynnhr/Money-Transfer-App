import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    flexGrow: 1,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.header,
    marginBottom: 20,
    marginTop: 40,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#38033bff", 
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  cardLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  cardAmount: {
    marginTop: 20,
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },

  cardFooter: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardButton: {
    backgroundColor: "#ffffff33",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  cardButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  visa:{
    color:"#fff",
    fontWeight:"900",
    fontSize:20,
    fontStyle: "italic",
  },
 

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    width: "48%",
    alignItems: "center",
  },

  actionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  sectionTitle: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.header,
  },

  noHistory: {
    marginTop: 10,
    color: colors.textLight,
  },

  transactionCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
  },

  transactionText: {
    fontSize: 16,
    color: colors.textDark,
  },

  transactionDate: {
    fontSize: 12,
    marginTop: 5,
    color: colors.textLight,
  },
  headerRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: 10,
},

profileImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "#7B2CBF",
},

dropdownMenu: {
  position: "absolute",
  right: 15,
  top: 60,
  backgroundColor: "#fff",
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 10,

  // Shadow
  elevation: 5,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  zIndex: 999,
},

dropdownItem: {
  paddingVertical: 8,
  fontSize: 16,
},

logoutText: {
  color: "red",
  fontWeight: "600",
},
});
