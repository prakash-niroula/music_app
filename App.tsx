import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Spotify from './assets/login/svgs/spotify.svg';

export default function App() {
  return (
    <View className="bg-red-500 flex h-full justify-center items-center">
      <Text>Open up App to start working on your app!</Text>
      <Spotify />
      <StatusBar style="auto" />
    </View>
  );
}