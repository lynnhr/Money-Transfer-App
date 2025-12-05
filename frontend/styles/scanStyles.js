import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Root container for the whole screen
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",

  },

  // ───────── CAMERA AREA ─────────
  cameraWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#38033bff",
  },

  gradientFrame: {
    width: 280,
    height: 280,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  innerFrame: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden", // rounds the camera corners
    backgroundColor: "#000",
  },

  camera: {
    width: "100%",
    height: "100%",
  },

  scanText: {
    marginTop: 20,
    color: "#f5eaff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  // ───────── CONFIRMATION AREA ─────────
  confirmBox: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 200, // push the confirmation content down a bit
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7b2cbf",
    marginBottom: 16,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
    textAlign: "center",
  },

  text: {
    fontSize: 16,
    color: "#444",
    marginBottom: 16,
    textAlign: "center",
  },

  input: {
    width: "85%",
    backgroundColor: "#f2f2f7",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },

  button: {
    width: "85%",
    backgroundColor: "#7b2cbf",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    width: "85%",
    backgroundColor: "#e0e0e0",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  secondaryButtonText: {
    color: "#444",
    fontSize: 15,
    fontWeight: "600",
  },

  // Used when permission is not granted
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
  },
});
