import { BackHeader } from "@/src/components/utils/backHeader";
import { Text, View, Image } from "react-native";

export default function Intervals() {
  return (
    <View>
      <BackHeader title="Intervalos dos vencedores" />

      <Text className="mt-4 text-2xl font-semibold">
        Aqui iremos mostrar o produtor com o maior e menor intervalo entre um título e outro!
      </Text>

      <Text className="mt-4 font-bold text-2xl">Menor tempo:</Text>
      <View className="mt-2 flex-row w-full rounded items-center justify-between">
        <View className="flex-1 gap-1">
          <Text className="font-semibold text-2xl">Produtor aqui</Text>
          <Text className="text-xl">Primeira vitória: 1992</Text>
          <Text className="text-xl">Segunda vitória: 1992</Text>
          <Text className="text-xl">Intervalo entre vitórias: 2</Text>
        </View>

        <Image
          source={require("../../assets/images/primary.png")}
          className="w-32 h-32 rounded-xl"
          resizeMode="cover"
        />
      </View>

      <Text className="mt-8 font-bold text-2xl">Maior tempo:</Text>
      <View className="mt-2 flex-row w-full rounded items-center justify-between">
        <View className="flex-1 gap-1">
          <Text className="font-semibold text-2xl">Produtor aqui</Text>
          <Text className="text-xl">Primeira vitória: 1992</Text>
          <Text className="text-xl">Segunda vitória: 1992</Text>
          <Text className="text-xl">Intervalo entre vitórias: 2</Text>
        </View>

        <Image
          source={require("../../assets/images/second.png")}
          className="w-32 h-32 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
