import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'

import Snackbar from 'react-native-snackbar'

const currencyPerRupe = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLER: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.52,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

const App = () => {
  const [inputValue, setinputValue] = useState(0)
  const [resultValue, setresultValue] = useState(0)

  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#ea3337',
        color: '#fff',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupe[currency]
    setresultValue(result.toFixed(2))

  }

  return (
    <ScrollView backgroundColor="#1b262c" keyboardShouldPersistTaps='handled' contentInsetAdjustmentBehavior='automatic' >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer} >
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='Enter Value'
            placeholderTextColor='#c1c1c1'
            value={inputValue}
            onChangeText={(inputValue) => setinputValue(inputValue)}
          ></TextInput>
        </View>
        <View style={styles.convertBtnContainer}>
          {Object.keys(currencyPerRupe).map((currency) => (
            <TouchableOpacity onPress={() => buttonPressed(currency)} key={currency} style={styles.converterBtn}>
              <Text style={styles.temp}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c'
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bb31fa',
    borderWidth: 2,
    alignItems: 'center'
  },
  resultValue: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa'
  },
  input:{
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff'
  },
  convertBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  temp: {
    color: '#fff'
  },
  converterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 5,
    backgroundColor: '#000'
  }
})
