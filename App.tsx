import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [mysteryNumber, setMysteryNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    const numGuess = parseInt(guess, 10); // checks or compares user input if it is a text or integer
    if (isNaN(numGuess)) {
      setMessage('Please enter a valid number.');
      return;
    }
    setAttempts(attempts + 1); // adding attempts by 1 every time the user tries again.
    if (numGuess < mysteryNumber) {
      setMessage('Your guess is low! Try Again.');
    } else if (numGuess > mysteryNumber) {
      setMessage('Your guess is high! Try Again.');
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} tries.`);
    }
  };
// resting attempts to 0, clearing current messages and setting a new random number.
  const resetGame = () => {
    setMysteryNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setGuess('');
    setMessage('');
  };

  return (
    <View>
      <Text>Guess the hidden number from (1-100):</Text><br></br>
      <TextInput
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
        placeholder="Please enter your guess"
      />
      <Button title="Guess" onPress={checkGuess} /><br></br>
      <Text>{message}</Text>
      <Button title="Reset" onPress={resetGame} />
      </View>
  );
}