import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginScreen from "../LoginScreen/LoginScreen";

const myStyle = StyleSheet.create({
  '*': {
    letterSpacing: -20
  }
})

export const Default: FC = () => {
  return (
    <View className="flex justify-center w-full h-full">
      <LoginScreen />
    </View>
  );
}

export default Default