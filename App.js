import { SafeAreaView, Text, View } from 'react-native';

import azul from "./assets/images/blue.jpg";
import verde from "./assets/images/green.jpg";

import Pontos from './componentes/pontos';

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <Pontos Fundo={azul} rotacao={180} cor="azul"/>
      <Pontos Fundo={verde} rotacao={0} cor="verde"/>
    </View>
    </SafeAreaView>
  );
}