import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "../styles/supportStyles";
import { sendSupport } from "../services/api";
import logo from "../assets/image.png";


export default function SupportScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  const [openIndex, setOpenIndex] = useState(null);

  const FAQ = [
    {
      q: "How do I send money?",
      a: "Go to Send → enter receiver details → confirm. Transfers are instant.",
    },
    {
      q: "How do I receive money?",
      a: "Show your QR code or share your email. The money arrives instantly.",
    },
    {
      q: "Is BonPay secure?",
      a: "Yes. All payments use encrypted channels and verified accounts.",
    }
  ];

  const toggleFAQ = (index) => {
   
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSend = async () => {
    setStatus("Sending...");
    const { error } = await sendSupport({ name, email, message: msg });

    if (error) setStatus(error);
    else {
      setStatus("Message sent! We will contact you soon.");
      setName("");
      setEmail("");
      setMsg("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
    <Image source={logo} style = {styles.logo}/>
      <Text style={styles.header}>Support</Text>

      
      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.messageBox]}
          placeholder="How can we help you?"
          value={msg}
          onChangeText={setMsg}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        {status ? <Text style={styles.status}>{status}</Text> : null}
      </View>

      
      <Text style={styles.faqHeader}>Frequently Asked</Text>

      <View style={styles.faqContainer}>
        {FAQ.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.faqItem}
            onPress={() => toggleFAQ(index)}
          >
            <Text style={styles.faqQuestion}>{item.q}</Text>

            {openIndex === index && (
              <Text style={styles.faqAnswer}>{item.a}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
