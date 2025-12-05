import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import Send from "../screens/Send";
import Receive from "../screens/Receive";
import Scan from "../screens/Scan";
import Support from "../screens/Support";
import CardDetails from "../screens/CardDetails";
import TabNavigator from "./TabNavigator";

// Onboarding screens
import Welcome1 from "../screens/Welcome1";
import Welcome2 from "../screens/Welcome2";
import Welcome3 from "../screens/Welcome3";
import ForgotPassword from "../screens/ForgotPassword";
import History from "../screens/History";

const Stack = createNativeStackNavigator();

export default function Navigator() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

       
            <Stack.Screen name="Welcome1" component={Welcome1} />
            <Stack.Screen name="Welcome2" component={Welcome2} />
            <Stack.Screen name="Welcome3" component={Welcome3} />
 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

      
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="History" component={History}/>

      
        <Stack.Screen name="Tabs" component={TabNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
