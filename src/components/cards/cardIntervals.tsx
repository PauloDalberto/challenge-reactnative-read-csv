import { View, Text, Image, ImageSourcePropType } from "react-native";

interface CardIntervalsProps {
  title: string;
  data?: {
    producer?: string;
    previousWin?: number;
    followingWin?: number;
    interval?: number;
  };
  image: ImageSourcePropType;
}

export function CardIntervals({ title, data, image }: CardIntervalsProps) {
  return (
    <>
      <Text className="mt-8 font-bold text-2xl">{title}</Text>

      <View className="mt-2 flex-row w-full rounded items-center justify-between">
        <View className="flex-1 gap-1">
          <Text className="font-semibold text-2xl">{data?.producer}</Text>
          <Text className="text-xl">Primeira vitória: {data?.previousWin}</Text>
          <Text className="text-xl">Segunda vitória: {data?.followingWin ?? data?.previousWin}</Text>
          <Text className="text-xl">Intervalo entre vitórias: {data?.interval}</Text>
        </View>

        <Image
          source={image}
          className="w-32 h-32 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </>
  );
}
