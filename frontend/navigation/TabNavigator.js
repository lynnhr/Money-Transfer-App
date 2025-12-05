import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import colors from "../styles/color";
import tabStyles from "../styles/tabStyles";

import Dashboard from "../screens/Dashboard";
import Send from "../screens/Send";
import Receive from "../screens/Receive";
import Scan from "../screens/Scan";
import Support from "../screens/Support";


const Tab = createBottomTabNavigator();

export default function TabNavigator({ route }) {
  const user = route.params?.user;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabStyles.tabBar,

        tabBarIcon: ({ focused }) => {
          let iconName = "home";
          if (route.name === "Send") iconName = "send";
          if (route.name === "Dashboard") iconName = "home";
          if (route.name === "Receive") iconName = "download";
          if (route.name === "Scan") iconName = "camera";
          if(route.name == "Support") iconName = "inbox"

          return (
            <View style={{ alignItems: "center" }}>
              {focused && (
                <View
                  style={[
                    tabStyles.bubble,
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Feather name={iconName} size={24} color="#fff" />
                </View>
              )}

              {!focused && (
                <Feather name={iconName} size={24} color="#444" />
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{ user }} />
      <Tab.Screen name="Send" component={Send} initialParams={{ user }} />
      <Tab.Screen name="Receive" component={Receive} initialParams={{ user }} />
      <Tab.Screen name="Scan" component={Scan} initialParams={{ user }} />
      <Tab.Screen name="Support" component={Support} initialParams={{ user }} />
    </Tab.Navigator>
  );
}
