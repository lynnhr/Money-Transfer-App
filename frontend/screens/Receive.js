import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "../styles/receiveStyles";

export default function Receive({ route }) {
  const { user } = route.params;

  const [mode, setMode] = useState("any"); // "any" or "fixed"
  const [amount, setAmount] = useState("");
  const [qrValue, setQRValue] = useState("");

  const generatePayload = () => {
    return JSON.stringify({
      receiverId: user.id,
      receiverEmail: user.email,
      type: mode,
      amount: mode === "fixed" ? Number(amount) : null,
    });
  };

  const handleGenerate = () => {
    if (mode === "fixed" && !amount) {
      alert("Please enter an amount");
      return;
    }
    setQRValue(generatePayload());
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Receive Money</Text>
      <Text style={styles.subtitle}>Show this QR to the sender</Text>

      {/* QR CARD */}
      <View style={styles.qrCard}>
        {qrValue ? (
          <QRCode value={qrValue} size={200} />
        ) : (
          <Text style={{ color: "#777" }}>Tap Generate to create QR</Text>
        )}
      </View>

      {/* INFO */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          Generate the code: A unique QR with your wallet info is created.{"\n\n"}
          Display the code: Show this QR to the person sending money.{"\n\n"}
          Receive the money: Once they scan & confirm, funds transfer instantly.
        </Text>
      </View>

      {/* OPTIONS */}
      {/* <TouchableOpacity onPress={() => setMode("any")}>
        <Text
          style={{
            marginTop: 20,
            color: mode === "any" ? "#b46cf7" : "#fff",
            fontWeight: "700",
          }}
        >
          • Receive ANY amount
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => setMode("fixed")}>
        <Text
          style={{
            marginTop: 10,
            color: mode === "fixed" ? "#b46cf7" : "#fff",
            fontWeight: "700",
          }}
        >
          • Enter fixed amount
        </Text>
      </TouchableOpacity>

      {mode === "fixed" && (
        <TextInput
          placeholder="Enter amount"
          keyboardType="numeric"
          style={{
            marginTop: 15,
            width: 200,
            padding: 12,
            backgroundColor: "#fff",
            borderRadius: 12,
            textAlign: "center",
          }}
          value={amount}
          onChangeText={setAmount}
        />
      )}

      {/* BUTTON */}
      <TouchableOpacity
        style={{
          backgroundColor: "#9c27b0",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 20,
          width: 200,
        }}
        onPress={handleGenerate}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>Generate QR</Text>
      </TouchableOpacity>

    </View>
  );
}