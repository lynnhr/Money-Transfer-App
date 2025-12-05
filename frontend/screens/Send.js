import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity,Image } from "react-native";
import styles from "../styles/sendStyles";
import { getBalance, sendMoney } from "../services/api";
import logo from '../assets/image.png';

export default function SendMoneyScreen({ route, navigation }) 
 {
  const { user } = route.params;
  const [receiverEmail, setReceiverEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const { data, error } = await getBalance(user.id);
      if (error) {
        setStatus(error);
        return;
      }

      if (data?.balance !== undefined && data?.balance !== null) {
        setBalance(data.balance);
      }
    };

    fetchBalance();
  }, [user.id]);

  const handleSend = async () => {
    const numericAmount = Number(amount);
    const availableBalance = balance ?? user?.balance ?? 0;

    if (!amount || Number.isNaN(numericAmount)) {
      setStatus("Please enter a valid amount.");
      return;
    }

    if (numericAmount <= 0) {
      setStatus("Amount must be greater than zero.");
      return;
    }

    if (numericAmount > availableBalance) {
      setStatus("Insufficient balance for this transfer.");
      return;
    }

    setStatus("Processing...");
    const { error } = await sendMoney({
      senderId: user.id,
      receiverEmail,
      amount: numericAmount,
      message,
    });
    if (error) setStatus(error);
    else setStatus("Transfer successful!");

    setTimeout(() => {
    navigation.replace("Dashboard", { user });
  }, 1000); 
  };

  return (
    <View style={styles.container}>
          <Image source={logo} style = {styles.logo}/>
      <Text style={styles.title}>Send Money</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Receiver Email"
          value={receiverEmail}
          onChangeText={setReceiverEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Message (optional)"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Confirm Transfer</Text>
        </TouchableOpacity>
        {status ? <Text style={styles.status}>{status}</Text> : null}
      </View>
    </View>
  );
}