import { Text, View, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Error() {
  return (
    <View className="flex items-center justify-center p-6 bg-white">
      <Image
        source={require("../../assets/images/error.png")} 
        className="w-72 h-72 mb-8 opacity-80"
        resizeMode="contain"
      />

      <Text className="text-2xl font-bold text-blue-600 mb-2 text-center">
        Ops, algo deu errado!
      </Text>

      <Text className="text-base text-gray-700 text-center mb-6">
        Ocorreu um problema ao tentar carregar os dados. Verifique sua conexão ou tente novamente mais tarde.
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-red-500 px-6 py-3 rounded-lg"
      >
        <Text className="text-white text-lg font-semibold">Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}
