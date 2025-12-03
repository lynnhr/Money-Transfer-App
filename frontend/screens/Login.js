import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/authStyles";
import { login } from "../services/api";
import logo from '../assets/image.png';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError(null);
    setLoading(true);
    const { data, error } = await login({ email, password });
    setLoading(false);

    if (error) {
      setError(error);
    } else {
      navigation.replace("Dashboard", { user: data });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style = {styles.logo}/>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {Error && <Text style={styles.error}>{Error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>
            {loading ? "Creating..." : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.footerText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
