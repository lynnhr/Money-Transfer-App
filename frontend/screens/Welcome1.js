import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/welcomeStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Welcome1({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.logo} />

      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.brand}>BonPay</Text>

      <Text style={styles.subtitle}>Your Best Money Transfer Partner.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Welcome2")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
