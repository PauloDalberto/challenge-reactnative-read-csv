import { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { getListCsv } from "../services/csv";

export default function Index(){
  const [loading, setLoading] = useState(false)
  const [listCsv, setListCsv]= useState([])
  
  useEffect(() => {
    async function getCsv(){
      try {
        setLoading(true)
        const data = await getListCsv()
        setListCsv(data)

      } catch (error) {
         console.log("Erro ao buscar CSV:", JSON.stringify(error, null, 2));
      } finally {
        setLoading(false)
      }
    }

    getCsv()
  }, [])

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View className="flex items-center h-full gap-12">
      <Text>Worst Movie Wins</Text>

      <Text className="font-bold text-2xl text-center">
        Bem vindo aos vencedores do pior filme!
      </Text>

      <Text className="text-2xl text-center">
        Para começar, selecione qual csv voce deseja visualizar
      </Text>

      <View className="flex gap-2 w-full">
        {listCsv.map((item, index) => (
          <TouchableOpacity key={index} className="border rounded-lg w-full p-4 border-gray-600 bg-gray-50">
            <Text  className="text-center text-base">
              Selecionar csv: {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );  
}