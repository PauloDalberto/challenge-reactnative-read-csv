import { TouchableOpacity, Image, View, Text, GestureResponderEvent, ImageSourcePropType } from 'react-native';

interface CardDashboardProps {
  text: string;
  image: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

export function CardDashboard({ text, image, onPress }: CardDashboardProps) {
  return (
    <TouchableOpacity onPress={onPress} className="w-full h-40 rounded bg-black mb-4">
      <Image 
        source={image}
        className="w-full h-full rounded opacity-30"
        resizeMode="cover"
      />

      <View className="absolute inset-0 justify-center items-center">
        <Text className="font-bold text-xl text-white text-center">{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
