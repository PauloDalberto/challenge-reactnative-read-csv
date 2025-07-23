import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface BackHeaderProps {
  title: string;
}

export function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center gap-4">
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <Text className="font-bold text-2xl">{title}</Text>
    </View>
  );
}
