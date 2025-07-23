import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function CardWinners({ item }: { item: any }) {
  return (
    <View className="p-4 rounded-lg border mt-4">
      <Text className="text-xl font-bold">{item.title}</Text>

      <View className="flex flex-row items-center gap-2">
        <Ionicons name="trophy" size={32} color="orange" />
        <Text className="font-semibold text-2xl">{item.year}</Text>
      </View>
    </View>
  );
}
