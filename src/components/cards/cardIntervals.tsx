import { View, Text, Image, ImageSourcePropType } from "react-native";
import { IntervalItem } from "@/src/@types/interval";

interface CardIntervalsProps {
  title: string;
  data?: IntervalItem[];
  image: ImageSourcePropType;
}

export function CardIntervals({ title, data = [], image }: CardIntervalsProps) {
  return (
    <>
      <Text className="mt-8 font-bold text-2xl">{title}</Text>

      {data.map((item, index) => (
        <View
          key={index}
          className="mt-2 flex-row w-full rounded items-center justify-between"
        >
          <View className="flex-1 gap-1">
            <Text className="font-semibold text-2xl">{item.producer}</Text>
            <Text className="text-xl">Primeira vitória: {item.previousWin}</Text>
            <Text className="text-xl">Segunda vitória: {item.followingWin ?? item.previousWin}</Text>
            <Text className="text-xl">Intervalo entre vitórias: {item.interval}</Text>
          </View>

          <Image
            source={image}
            className="w-32 h-32 rounded-xl"
            resizeMode="cover"
          />
        </View>
      ))}
    </>
  );
}
