import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('0');
      setResult('');
    } else {
      setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    }
  };

  const renderButton = (value, flex = 1) => (
    <TouchableOpacity
      style={[styles.button, { flex }]}
      onPress={() => handleButtonPress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('/', 0.5)}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('*', 0.5)}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('-', 0.5)}
        </View>
        <View style={styles.row}>
          {renderButton('0', 2)}
          {renderButton('.', 1)}
          {renderButton('+', 0.5)}
          {renderButton('=', 0.5)}
        </View>
        <View style={styles.row}>
          {renderButton('C', 2)}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  resultText: {
    fontSize: 24,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  inputText: {
    fontSize: 32,
  },
  buttonContainer: {
    flex: 4,
    width: '100%',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#61dafb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
