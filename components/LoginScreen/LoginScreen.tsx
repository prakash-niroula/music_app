import { FC } from "react";
import { TouchableHighlight, TouchableOpacity, View, Text } from "react-native";

import SpotifySvg from '@/assets/login/svgs/spotify.svg';
import YoutubeSvg from '@/assets/login/svgs/youtube.svg';

export const LoginScreen: FC = () => {
  return (
    <View className="flex items-center w-full">
      <Text className="font-interBold text-title text-main-black tracking-title w-full pl-5">Get Started.</Text>
      <View className="flex space-y-4 mt-6 w-full px-5">
        <TouchableHighlight className="bg-rectangle-grey w-full h-12 flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2 items-center">
            {/* Official spotify color ;D */}
            <SpotifySvg width={20} height={20} fill={'#1ED760'} />
            <Text className="font-interMedium text-main-grey tracking-base text-base">Connect with Spotify</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity className="bg-rectangle-grey w-full px-3 mt-6 h-12 flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2 items-center">
            <YoutubeSvg width={20} height={20} fill={'red'} />
            <Text className="font-interMedium text-main-grey tracking-base text-base">Connect with Youtube</Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row space-x-5 w-full items-center">
          <View className="h-[1px] flex-1 bg-tertiary-grey"></View>
          <Text className="text-secondary-grey text-base">or</Text>
          <View className="h-[1px] flex-1 bg-tertiary-grey font-interMedium"></View>
        </View>
        <TouchableOpacity className="bg-main-blue w-full px-3 mt-6 h-12 flex justify-center rounded items-center">
          <Text className="font-interMedium text-white tracking-base text-base">Connect as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen