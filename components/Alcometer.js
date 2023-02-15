import { useState } from 'react';
import { Alert, Pressable, Switch, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, TextInput } from 'react-native-paper';
import { lightStyle, darkStyle, resultStyle } from '../styles/Styles';

export default function Alcometer() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [sex, setSex] = useState('');
    const [result, setResult] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const container = isOn ? darkStyle.container : lightStyle.container; 
    const header = isOn ? darkStyle.header : lightStyle.header;
    const input = isOn ? darkStyle.textInputStyle : lightStyle.textInputStyle;
    const headings = isOn ? darkStyle.headingsStyle : lightStyle. headingsStyle;

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
    }

    function returnResult() {
        if (result < 0) {
            setResult(0);
            return (
                <Text style={resultStyle.goodColor}>{result.toFixed(2)}</Text>
            )
        } else if (result >= 0 && result < 0.2) {
            return (
                <Text style={resultStyle.goodColor}>{result.toFixed(2)}</Text>
            )
        } else if (result < 0.5 && result >= 0.2) {
            return (
                <Text style={resultStyle.warningColor}>{result.toFixed(2)}</Text>
            )
        } else {
            return (
                <Text style={resultStyle.badColor}>{result.toFixed(2)}</Text>
            )
        }
    }

    return (
        <View style={container}>
            <Switch
            value={isOn}
            onValueChange={t => setIsOn(t)}
            />
            <Text style={header}>Alcometer</Text>
            <Text style={headings}>Weight</Text>
            <TextInput style={input} keyboardType='decimal-pad' onChangeText={w => setWeight(w)}/>
            <Text style={headings}>Bottles</Text>
            {isOn ?
                <NumericInput
                minValue={0}
                onChange={b => setBottles(b)}
                rounded
                totalWidth={170}
                totalHeight={60}
                rightButtonBackgroundColor='whitesmoke'
                leftButtonBackgroundColor='whitesmoke'
                containerStyle={{backgroundColor: 'ghostwhite'}}
                />
            : <NumericInput 
                minValue={0}
                onChange={b => setBottles(b)}
                rounded
                totalWidth={170}
                totalHeight={60}
                rightButtonBackgroundColor='grey'
                leftButtonBackgroundColor='grey'
                iconStyle={{color: 'white'}}
                containerStyle={{backgroundColor: '#f0f0f0'}}
                />
            }
            <Text style={headings}>Hours</Text>
            {isOn ?
            <NumericInput
            minValue={0}
            onChange={h => setHours(h)}
            rounded
            totalWidth={170}
            totalHeight={60}
            rightButtonBackgroundColor='whitesmoke'
            leftButtonBackgroundColor='whitesmoke'
            containerStyle={{backgroundColor: 'ghostwhite'}}
            />
            :
            <NumericInput style={lightStyle.numInputStyle}
            minValue={0}
            onChange={h => setHours(h)}
            rounded
            totalWidth={170}
            totalHeight={60}
            rightButtonBackgroundColor='grey'
            leftButtonBackgroundColor='grey'
            iconStyle={{color: 'white'}}
            containerStyle={{backgroundColor: '#f0f0f0'}}
            />
            }
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
                <Text>{returnResult()}</Text>
            </View>
            <Pressable onPress={calculateAlcoholLevel}>
                <Text>Calculate</Text>
            </Pressable>
        </View>
    );
}