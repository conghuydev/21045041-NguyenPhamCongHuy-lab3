import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const solveQuadratic = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);
    const delta = B * B - 4 * A * C;

    if (delta < 0) {
      setResult('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const x = -B / (2 * A);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      setResult(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2: ax² + bx + c = 0</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        onChangeText={setA}
        value={a}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        onChangeText={setB}
        value={b}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        onChangeText={setC}
        value={c}
      />
      <Button title="Giải phương trình" onPress={solveQuadratic} />
      <Text style={styles.result}>{result}</Text>
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
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});