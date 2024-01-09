import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import SpotifySvg from '@/assets/login/svgs/spotify.svg';
import YoutubeSvg from '@/assets/login/svgs/youtube.svg';

export const LoginScreen: FC = () => {
  return (
    <View className="text-base sm:text-lg w-full h-full flex flex-row bg-white text-main-black items-center max-sm:pt-[15%]">
      <View className="w-full px-[5%] flex justify-center h-auto items-end">
        <View className="flex flex-row w-full sm:justify-center">
          <Text className="font-interBold sm:pb-12 max-sm:text-title text-5xl tracking-title">Get Started.</Text>
        </View>
        <View className="mt-6 rounded space-y-base w-full">
          <TouchableOpacity className="rounded w-full min-h-12 space-x-2 h-[15vw] max-h-16 bg-rectangle-grey tracking-base justify-center items-center font-medium flex flex-row text-main-grey">
            <SpotifySvg className="text-green-400" width={23} height={23} />
            <Text className="tracking-base text-base text-main-grey font-interMedium">Connect with Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded w-full min-h-12 space-x-2 h-[15vw] max-h-16 bg-rectangle-grey tracking-base justify-center items-center font-medium flex flex-row text-main-grey">
            <YoutubeSvg width={23} height={23} />
            <Text className="tracking-base text-base text-main-grey font-interMedium">Connect with Youtube</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex flex-row items-center space-x-2 mt-small">
          <View className="flex-1 h-[1px] bg-tertiary-grey mt-[2px]"></View>
          <Text className="text-base font-interMedium tracking-base text-secondary-grey">or</Text>
          <View className="flex-1 h-[1px] bg-tertiary-grey mt-[2px]"></View>
        </View>
          <TouchableOpacity className="rounded w-full mt-small min-h-12 space-x-2 h-[15vw] max-h-16 bg-main-blue tracking-base justify-center items-center font-medium flex flex-row text-main-grey">
            <Text className="tracking-base text-base text-white font-interMedium">Connect as Guest</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen