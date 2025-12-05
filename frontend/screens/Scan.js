import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";

import scanStyles from "../styles/scanStyles";
import { processQR } from "../services/api";

export default function Scan({ route, navigation }) {
  const { user } = route.params;

  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(true);
  const [qrData, setQRData] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, []);

  // When QR code is scanned
  const handleScan = ({ data }) => {
    console.log("SCANNED RAW DATA:", data);

    try {
      const parsed = JSON.parse(data);
      setScanning(false);
      setQRData(parsed);
    } catch (e) {
      alert("Invalid QR Code");
      setScanning(true);
    }
  };

  // Confirm payment
  const handleConfirm = async () => {
    const finalAmount = qrData.amount ?? Number(amount);

    if (!finalAmount) {
      alert("Please enter an amount");
      return;
    }

    console.log("QR DATA:", qrData);

    const res = await processQR({
      senderId: user.id,
      receiverId: qrData.receiverId,
      amount: finalAmount,
    });

    if (res.error) {
      alert(res.error);
    } else {
      alert("Payment successful!");
      navigation.goBack();
    }
  };

  if (!permission) return <Text>Checking permissions…</Text>;

  if (!permission.granted)
    return (
      <View style={scanStyles.center}>
        <Text style={scanStyles.text}>Camera permission required</Text>
        <TouchableOpacity style={scanStyles.button} onPress={requestPermission}>
          <Text style={scanStyles.buttonText}>Enable Camera</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <LinearGradient
      colors={["#2d041eff", "#bf2cb3ff", "#c29ae9ff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={scanStyles.container}
    >
      {/* ───────────────────────── QR SCANNING ───────────────────────── */}
      {scanning ? (
        <View style={scanStyles.cameraWrapper}>
          <LinearGradient
            colors={["#180926ff", "#2d041eff"]}
            style={scanStyles.gradientFrame}
          >
            <View style={scanStyles.innerFrame}>
              <CameraView
                style={scanStyles.camera}
                facing="back"
                onBarcodeScanned={handleScan}
              />
            </View>
          </LinearGradient>

          <Text style={scanStyles.scanText}>Align QR Code Inside the Frame</Text>
        </View>
      ) : (
        /* ───────────────────── CONFIRMATION SCREEN ───────────────────── */
        <View style={scanStyles.confirmBox}>
          <Image
            source={require("../assets/image.png")}
            style={scanStyles.logo}
          />

          <Text style={scanStyles.title}>Confirm Payment</Text>

          <Text style={scanStyles.label}>To: {qrData.receiverEmail}</Text>

          {!qrData.amount && (
            <TextInput
              placeholder="Enter amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              style={scanStyles.input}
            />
          )}

          {/* Confirm Payment */}
          <TouchableOpacity style={scanStyles.button} onPress={handleConfirm}>
            <Text style={scanStyles.buttonText}>Send Money</Text>
          </TouchableOpacity>

          {/* Scan Again */}
          <TouchableOpacity
            style={scanStyles.secondaryButton}
            onPress={() => setScanning(true)}
          >
            <Text style={scanStyles.secondaryButtonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}
