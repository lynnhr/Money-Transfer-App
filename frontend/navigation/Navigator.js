import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
// import Dashboard from "../screens/Dashboard";
// import SendMoneyScreen from "../screens/SendMoneyScreen";
// import ReceiveMoneyScreen from "../screens/ReceiveMoneyScreen";
// import HistoryScreen from "../screens/HistoryScreen";
// import SupportScreen from "../screens/SupportScreen";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="Send" component={SendMoneyScreen} />
        <Stack.Screen name="Receive" component={ReceiveMoneyScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
