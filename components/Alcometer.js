import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, TextInput } from 'react-native-paper';
import { lightStyle, darkStyle } from '../styles/Styles';

export default function Alcometer() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [sex, setSex] = useState('');
    const [result, setResult] = useState(0);

    const LITRES = bottles * 0.33;
    const GRAMS = LITRES * 8 * 4.5;
    const BURNING = weight / 10;
    const GRAMS_LEFT = GRAMS - BURNING * hours;

    const showAlert = () => {
        Alert.alert(
            "Input missing: weight",
            "Unless you are a photon, your weight cannot be 0. Please type in your weight before calculating blood alcohol level.",
            [
                {
                    text: "Ok",
                }
            ]
        );
    }

    function calculateAlcoholLevel() {
        if (weight <= 0) {
            showAlert();
        } else if (sex === 'male') {
            let rMale = GRAMS_LEFT / (weight * 0.7);
            setResult(rMale);
        } else {
            let rFemale = GRAMS_LEFT / (weight * 0.6);
            setResult(rFemale);
        }
        if (result < 0) {
            setResult(0);
        }
    }

    return (
        <View>
            <Text>Weight</Text>
            <TextInput keyboardType='decimal-pad' onChangeText={w => setWeight(w)}/>
            <Text>Bottles</Text>
            <NumericInput minValue={0} onChange={b => setBottles(b)}/>
            <Text>Hours</Text>
            <NumericInput minValue={0} onChange={h => setHours(h)}/>
            <RadioButton.Group onValueChange={s => setSex(s)} value={sex}>
                <View style={lightStyle.radioStyle}>
                    <RadioButton value='male'/>
                    <Text>Male</Text>
                </View>
                <View style={lightStyle.radioStyle}>
                    <RadioButton value='female'/>
                    <Text>Female</Text>
                </View>
            </RadioButton.Group>
            <View>
                <Text>Your blood alcohol level is</Text>
                <Text>{result.toFixed(2)}</Text>
            </View>
            <Pressable onPress={calculateAlcoholLevel}>
                <Text>Calculate</Text>
            </Pressable>
        </View>
    );
}