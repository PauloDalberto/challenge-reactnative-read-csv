import { Winner } from "@/src/@types/winner";
import { getWinners } from "@/src/services/movies";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardWinners } from "@/src/components/cards/cardWinners";
import { BackHeader } from "@/src/components/utils/backHeader";
import Loading from "@/src/components/loading/loading";

export default function Winners(){
  const [loading, setLoading] = useState(true);
  const [winners, setWinners] = useState<Winner[]>([]);

  useEffect(() => {
    const getWinner = async () => {
      try {
        const data = await getWinners();
        setWinners(data)
      } catch (error) {
        console.log("Error winners: ", error)
      } finally {
        setLoading(false);
      }
    }
    
    getWinner();
  }, [])

  if (loading) return <Loading />;

  return (
    <FlatList
      data={winners}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 64 }}
      ListHeaderComponent={
        <View className="gap-4">
          <BackHeader title="Ganhadores"/>
          <Text className="font-bold text-2xl">Veja a lista completa de todos os filmes ganhadores!</Text>
        </View>
      }
      renderItem={({ item }) => <CardWinners item={item}/>}
    />
  );
}