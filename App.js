import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
//Componentes
import Texto from './src/components/Text';
import TextoInp from './src/components/TextInput';
import { styles } from './src/style/style';
import React, { useState } from 'react';
import Press from './src/components/Pressable';


export default function App() {

  const [graus, setGraus] = useState("");
  const [resultado, setResultado] = useState("");

  const Converter = () => {
    if (graus != "") {
      const fahrenheit = (graus * 9 / 5) + 32;
      setResultado(fahrenheit)
      setGraus("")
    } else {
      alert("Não pode estar vazio")
    }


  }

  return (
    <View style={styles.container}>
      <Texto titulo="Insira" style={styles.Text} />
      <TextoInp onChangeText={setGraus} value={graus} titulo="Digite Aqui" style={styles.Inp} />
      <Texto titulo={resultado} />
      <Press onPress={Converter}>
        <Texto titulo="Converter" />
      </Press>
      <StatusBar style="auto" />
    </View>
  );
}

