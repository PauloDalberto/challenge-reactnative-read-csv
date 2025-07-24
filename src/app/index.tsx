import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { getListCsv, selectCsv } from "../services/csv";
import { router } from "expo-router";
import Loading from "../components/loading/loading";

export default function Index(){
  const [loading, setLoading] = useState(false)
  const [listCsv, setListCsv]= useState<string[]>([])
  
  useEffect(() => {
    async function getCsv(){
      try {
        setLoading(true)
        const data = await getListCsv()
        setListCsv(data)
      } catch {
        router.push('/pages/Error')
      } finally {
        setLoading(false)
      }
    }

    getCsv()
  }, [])

  if (loading) return <Loading />;

  const handleCsv = async (filename: string) => {
    await selectCsv(filename)
    router.push({
      pathname: "/pages/Dashboard",
      params: { filename }
    })
  }

  return (
    <View className="flex items-center h-full ">
      <Text>Worst Movie Wins</Text>

      <Text className="mt-8 text-2xl text-start font-semibold">
        Para começar, selecione qual csv voce deseja visualizar:
      </Text>

      <View className="mt-3 flex gap-2 w-full">
        {listCsv.map((item, index) => (
          <TouchableOpacity 
            onPress={() => handleCsv(item)} 
            key={index} 
            className="border rounded-lg w-full h-20 border-gray-600 "
          >
            <Image 
              source={require('../assets/images/database.jpg')}
              className="w-full h-full rounded opacity-20"
              resizeMode="cover"
            />
            <View className="absolute inset-0 justify-center items-center">
              <Text className="text-center text-xl font-bold">
                SELECIONAR CSV: {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );  
}