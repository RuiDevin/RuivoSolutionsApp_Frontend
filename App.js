import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Home";
import Solutions from "./Solutions";
import Produtos from "./Produtos";

const Stack = createStackNavigator();

export default function App() {
  const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Solutions" component={Solutions} />
          <Stack.Screen name="Produtos" component={Produtos} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
