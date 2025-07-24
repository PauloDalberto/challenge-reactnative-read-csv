import { router, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { BackHeader } from "@/src/components/utils/backHeader";
import { CardDashboard } from "@/src/components/cards/cardDashboard";

export default function Dashboard() {
  const { filename } = useLocalSearchParams();

  return (
    <View className="flex h-full">
      <BackHeader title="Dashboard"/>
      
      <Text className="mt-4 text-lg font-semibold">
        Arquivo selecionado: {filename}
      </Text>

      <Text className="mt-4 font-bold text-2xl">
        Qual das opções você desejar ver?
      </Text>

      <View className="mt-4 flex gap-2">
        <CardDashboard 
          text="VER LISTA DE FILMES GANHADORES!"
          image={require('../../assets/images/movies.jpg')}
          onPress={() => router.push('/pages/Winners')}
        />

        <CardDashboard 
          text="VER INTERVALO ENTRE GANHADORES!"
          image={require('../../assets/images/oscar.jpg')}
          onPress={() => router.push('/pages/Intervals')}
        />
      </View>
    </View>
  );
}
