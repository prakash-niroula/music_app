import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';

import {
  useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light,
  Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold,
  Inter_800ExtraBold, Inter_900Black
} from '@expo-google-fonts/inter';

import Spotify from './assets/login/svgs/spotify.svg';
import { useState } from 'react';
import Default from './components/Default/Default';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin, Inter_200ExtraLight, Inter_300Light,
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold,
    Inter_700Bold, Inter_800ExtraBold, Inter_900Black
  })
  
  if ( !fontsLoaded ) {
    return <></>
  }

  return (
    <Default />
  );
}