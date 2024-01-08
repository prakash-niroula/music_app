import { FC } from "react";
import { Button, TouchableHighlight, TouchableOpacity, View, Text } from "react-native";

import SpotifySvg from '@/assets/login/svgs/spotify.svg';
import YoutubeSvg from '@/assets/login/svgs/youtube.svg';

export const LoginScreen: FC = () => {
  return (
    <View className="flex items-start w-full pl-5">
      <Text className="font-interBold text-4xl text-main-black tracking-def">Get Started.</Text>
      <View className="flex space-y-4 mt-6">
        <TouchableHighlight className="bg-rectangle-grey w-64 h-12 flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2">
            {/* Official spotify color ;D */}
            <SpotifySvg width={20} height={20} fill={'#1ED760'} />
            <Text className="font-interMedium text-main-black tracking-tighter">Connect with Spotify</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity className="bg-rectangle-grey w-64 mt-6 h-12 flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2">
            <YoutubeSvg width={20} height={20} fill={'red'} />
            <Text className="font-interMedium text-main-black tracking-tighter">Connect with Youtube</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

export default LoginScreen