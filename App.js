import { StatusBar, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import Cesta from './src/pages/Cesta';
import mockCesta from './src/moks/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [font] = useFonts({
    'montserratRegular': Montserrat_400Regular,
    'montserratBold': Montserrat_700Bold
  });

  if (!font) {
    return <View style={styles.load}>
      <Text>Aguarde, o app está carregando!</Text>
    </View>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mockCesta} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  load: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});