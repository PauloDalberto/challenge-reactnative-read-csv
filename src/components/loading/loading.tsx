import { View, Text, ActivityIndicator } from 'react-native'

export default function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <ActivityIndicator size="large" color="#6366F1" /> 
      <Text className="mt-4 text-lg text-gray-700 text-center font-medium">
        O conteúdo está sendo carregado, por favor aguarde...
      </Text>
    </View>
  )
}
