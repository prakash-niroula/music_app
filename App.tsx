import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-red-500 flex h-full justify-center items-center">
      <Text>Open up App to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}