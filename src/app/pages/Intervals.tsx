import { Interval } from "@/src/@types/interval";
import { CardIntervals } from "@/src/components/cards/cardIntervals";
import Loading from "@/src/components/loading/loading";

import { BackHeader } from "@/src/components/utils/backHeader";
import { getIntervals } from "@/src/services/movies";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Intervals() {
  const [loading, setLoading] = useState(true);
  const [intervals, setIntervals] = useState<Interval | null>(null);

  useEffect(() => {
    const getInterval = async () => {
      try {
        const data = await getIntervals();
        setIntervals(data);
      } catch (error) {
        console.error("Error intervals:", error);
      } finally {
        setLoading(false);
      }
    };

    getInterval();
  }, []);

  if (loading) return <Loading />;

  return (
    <View className="flex h-full">
      <BackHeader title="Intervalos dos vencedores" />

      <Text className="mt-4 text-2xl font-semibold">
        Aqui iremos mostrar o produtor com o maior e menor intervalo entre um título e outro!
      </Text>

      <CardIntervals
        title="Menor Tempo:"
        data={intervals?.min}
        image={require("../../assets/images/primary.png")}
      />

      <CardIntervals
        title="Maior Tempo:"
        data={intervals?.max}
        image={require("../../assets/images/second.png")}
      />
    </View>
  );
}
