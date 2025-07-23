import { router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { BackHeader } from "@/src/components/utils/backHeader";

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
        <TouchableOpacity onPress={() => router.push('/pages/Winners')} className="w-full h-40 rounded bg-black">
          <Image 
            source={require('../../assets/images/movies.jpg')}
            className="w-full h-full rounded opacity-30"
            resizeMode="cover"
          />

          <View className="absolute inset-0 justify-center items-center">
            <Text className="font-bold text-xl text-white">VER LISTA DE FILMES GANHADORES!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/pages/Intervals')} className="w-full h-40 rounded bg-black">
          <Image 
            source={require('../../assets/images/oscar.jpg')}
            className="w-full h-full rounded opacity-30"
            resizeMode="cover"
          />

          <View className="absolute inset-0 justify-center items-center">
            <Text className="font-bold text-xl text-white">VER INTERVALO ENTRE GANHADORES!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
