import { StyleSheet } from "react-native";
import colors from "./color";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    color: colors.textLight,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 20,
    color: colors.textDark,
    fontWeight: "600",
  },
  qrCard: {
    width: 260,
    height: 260,
    backgroundColor: colors.card,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 6,
  },
  infoCard: {
    marginTop: 30,
    width: 260,
    padding: 18,
    borderRadius: 20,
    backgroundColor: colors.card,
  },
  infoText: {
    textAlign: "center",
    color: colors.textLight,
  },
});
