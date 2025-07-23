import { Interval } from "@/src/@types/interval";
import { CardIntervals } from "@/src/components/cards/cardIntervals";
import { BackHeader } from "@/src/components/utils/backHeader";
import { getIntervals } from "@/src/services/movies";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Intervals() {
  const [intervals, setIntervals] = useState<Interval | null>(null)

  useEffect(() => {
    const getInterval = async () => {
      const data = await getIntervals()
      setIntervals(data)
    }

    getInterval()

  }, [])

  const min = intervals?.min[0]
  const max = intervals?.max[0]

  return (
    <View>
      <BackHeader title="Intervalos dos vencedores" />

      <Text className="mt-4 text-2xl font-semibold">
        Aqui iremos mostrar o produtor com o maior e menor intervalo entre um título e outro!
      </Text>

      <CardIntervals 
        title="Menor Tempo:"
        data={min}
        image={require("../../assets/images/primary.png")}
      />

      <CardIntervals 
        title="Maior Tempo:"
        data={max}
        image={require("../../assets/images/second.png")}
      />
    </View>
  );
}
