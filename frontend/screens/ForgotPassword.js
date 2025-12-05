import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/authStyles";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset instructions sent to: " + email);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recover Password</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}