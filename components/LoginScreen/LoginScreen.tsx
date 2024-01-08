import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import SpotifySvg from '@/assets/login/svgs/spotify.svg';
import YoutubeSvg from '@/assets/login/svgs/youtube.svg';

export const LoginScreen: FC = () => {
  return (
    <View className="flex justify-center w-full h-[75%]">
      <Text className="font-interBold text-title text-main-black tracking-title w-full pl-5">Get Started.</Text>
      <View className="flex mt-6 w-full px-5">
        <TouchableOpacity className="mb-base bg-rectangle-grey w-full h-[17%] flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2 items-center">
            {/* Official spotify color ;D */}
            <SpotifySvg width={25} height={25} fill={'#1ED760'} />
            <Text className="font-interMedium text-main-grey tracking-base text-base">Connect with Spotify</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-rectangle-grey w-full h-[17%] px-3 flex justify-center rounded items-center">
          <View className="flex flex-row space-x-2 items-center">
            <YoutubeSvg width={25} height={25} fill={'red'} className=""/>
            <Text className="font-interMedium text-main-grey tracking-base text-base">Connect with Youtube</Text>
          </View>
        </TouchableOpacity>
        <View className="flex flex-row space-x-2 w-full mb-small">
            <View className="h-[1px] flex-1 bg-tertiary-grey font-interMedium mt-[12px]"></View>
            <View className="flex flex-row items-center">
              <Text className="text-secondary-grey text-base">or</Text>
            </View>
            <View className="h-[1px] flex-1 bg-tertiary-grey font-interMedium mt-[12px]"></View>
        </View>
        <TouchableOpacity className="bg-main-blue w-full px-3 h-[17%] flex justify-center rounded items-center">
          <Text className="font-interMedium text-white tracking-base text-base">Continue as Guest</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default LoginScreen