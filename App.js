import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBMI] = useState('')
  const [message, setMessage] = useState('')
  return (
    <ImageBackground source={require('./assets/bg.png')}
    style={{width: '100%', 
    height: '100%'}}>
    <View style={styles.container}>
      <Text style={styles.appTitle}>BMI Calculator</Text>

      <View style={{flexDirection:"row"}}>
      <TextInput value={weight} onChangeText={text => setWeight(text)}
      style={styles.inputStyle} placeholder="Enter Weight (kg)"></TextInput>
      <TextInput value={height} onChangeText={text => setHeight(text)}
      style={styles.inputStyle} placeholder="Enter Height (m)"></TextInput>
      </View>

      <TouchableOpacity        
        onPress={() => {
          // Calculate the BMI
          let tempHeight = height
          if(tempHeight > 10){
            tempHeight = tempHeight / 100
          }
          let bmi = (weight / Math.pow(tempHeight,2)).toPrecision(2);
          if (bmi < 18){
            setMessage("Underweight")
          }
          else if (bmi < 30){
            setMessage("Overweight")
          }
          else {
            setMessage("Obese")
          }
          setBMI(bmi)
        }
      }>
      <Text style={styles.buttonStyle}>Press me!</Text></TouchableOpacity>
      <Text>{weight} / {height} * {height}</Text>
      <Text>{bmi}</Text>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#ffcb1f',
    height: 80,
    //width: 120,
    borderColor: 'grey',
    borderWidth:3,
    flex: 1,
    fontSize: 50,
    marginTop: 24,
    //alignItems: 'center',
    //justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    
  },
  appTitle: {
    color: '#ffcb1f',
    marginTop: 50,
    fontSize: 35,
    alignSelf: 'center'
  },
  result: {
    color: '#ffcb1f',
    alignSelf: 'center',
    fontSize: 65,
    padding: 15,

  },
  buttonStyle: {
    color: '#ffcb1f',
    alignSelf: 'center',
    padding: 30,
    fontWeight: 'bold',
    fontSize: 25,

  }
});
