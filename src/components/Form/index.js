import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Vibration,
} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    const inputWeight = weight.replace(',', '.');
    const inputHeight = height.replace(',', '.');

    return setImc((inputWeight / (inputHeight * inputHeight)).toFixed(2));
  }

  function validationImc() {
    Keyboard.dismiss();
    if (weight && height) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu imc é igual: ');
      setTextButton('Calcular novamente');
      setErrorMessage(null);
      return;
    }
    setImc(null);
    setTextButton('Calcular');
    setMessageImc('preencha o peso e altula');
    Vibration.vibrate();
    setErrorMessage('*campo obrigatório');
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        ></TextInput>

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={validationImc}
        >
          <Text style={styles.buttonCalculatorText}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </View>
    </View>
  );
}
