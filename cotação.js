import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
    const [dol1, setD1] = useState('');
   
    function divi(){
      const do1= parseFloat(dol1);
      const total=(do1/5.08);
      alert('O valor em dólar é '+total);
    } 
  
    return (
      <View style={styles.container}>
            <Text style={styles.titulo}>A plicativo de calculo em Fahrenhei</Text>
            
            <TextInput
            style={styles.campo}
            value={dol1}
            onChangeText={ setD1}
            placeholder="Digite o valor em dólar"
            keyboardType="numeric"
          />
   <TouchableOpacity style={styles.botao} onPress={divi}>
          <Text style={styles.textoBotao}>Valor</Text>
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