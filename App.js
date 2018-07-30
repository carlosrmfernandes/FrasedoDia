/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image,Alert} from 'react-native';

var frasedodia=()=>{
  var rando=Math.floor(Math.random()*10);
  var frases=Array("Enfrente os problemas e leve a melhor!",
  "Dê mais atenção ao que você tem de bom na sua vida",
  "De nada adianta ter sonhos, se você não se empenhar em correr atrás",
  "Não deixe nada nem ninguém estragar o seu bom humor",
  "Ontem já passou, é hora de planejar o futuro",
  "Você pode não ter o melhor do mundo, mas tem muito pelo que agradecer!",
  "Não deixe sua felicidade nas mãos de ninguém!",
  "Nunca é tarde para fazer o que você realmente quer fazer",
  "Mais palavras para quê ?",
  "Nunca duvide que você é especial !",
  "Tenha um objetivo na vida e lute sempre para alcançá-lo !");

  Alert.alert(frases[rando]);

}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image
          source={require('./img/logo.png')}
        />
        <TouchableOpacity style={styles.botao} onPress={frasedodia}>
        <Text style={styles.textobotao}>Nova Frase</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',


  },
  botao:{
    backgroundColor:'green',
    padding:10,
    width:190,
    height:50,
    margin:20,

  },
  textobotao:{
      textAlign: 'center',
      color:'white',
      fontSize:20,
      fontWeight:'600',
  }

});
