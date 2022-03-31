import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [cel1, setC1] = useState('');
  
  function mult(){
    const ce1= parseFloat(cel1);
    const total=(ce1*9/5) + 32;

     alert('O grau em Fahrenhei é'+total);
  }
     return (
      <View style={styles.container}>
            <Text style={styles.titulo}>A plicativo de calculo em Fahrenhei</Text>
            
            <TextInput
            style={styles.campo}
            value={cel1}
            onChangeText={ setC1}
            placeholder="Digite o grau em celcius"
            keyboardType="numeric"
          />
   <TouchableOpacity style={styles.botao} onPress={mult}>
          <Text style={styles.textoBotao}>Graus</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1},
    
    titulo:{
      textAlign: 'center',
      marginTop: 60,
      fontSize: 30,
    },
      
        campo:{
         backgroundColor: '#5F9EA0',
         borderRadius: 10,
         margin: 15,
         padding: 10,
         color: '#FFF',
         fontSize: 23,
        },

        botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#66CDAA',
    padding: 10,    
  },
  textoBotao:{
    color: '#FFF',
    fontSize: 25,
  }
});