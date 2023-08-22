import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import FirstPage from "./screens/FirstPage";
import FitnessCards from "./components/FitnessCards";
import AboutUs from "./screens/AboutUs";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={FitnessCards} options={{headerShown:false}}/>
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
