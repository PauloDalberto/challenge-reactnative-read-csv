import { Slot } from 'expo-router';
import 'react-native-reanimated';
import '../../global.css';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View className='px-6 pt-12'>
      <Slot />
    </View>
  );
}
