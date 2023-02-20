import { useState } from 'react';
import { Alert, Pressable, Switch, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, TextInput } from 'react-native-paper';
import { lightStyle, darkStyle, resultStyle } from '../styles/Styles';

export default function Alcometer() {
    // Declaring necessary state variables
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [hours, setHours] = useState(0);
    const [sex, setSex] = useState('');
    const [result, setResult] = useState(0);
    const [isOn, setIsOn] = useState(false);

    // Declaring the needed constants for styling and conditional rendering
    const container = isOn ? darkStyle.container : lightStyle.container; 
    const header = isOn ? darkStyle.header : lightStyle.header;
    const input = isOn ? darkStyle.textInputStyle : lightStyle.textInputStyle;
    const headings = isOn ? darkStyle.headingsStyle : lightStyle.headingsStyle;
    const texts = isOn ? darkStyle.textStyle : lightStyle.textStyle;
    const button = isOn ? darkStyle.buttonStyle : lightStyle.buttonStyle;
    const scale = [{scaleX: 1.3},{scaleY: 1.3}];

    // Constants needed for calculations
    const LITRES = bottles * 0.33;
    const GRAMS = LITRES * 8 * 4.5;
    const BURNING = weight / 10;
    const GRAMS_LEFT = GRAMS - BURNING * hours;

    // Alert for missing weight input
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

    // Function to calculate alcohol level based on chosen gender
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

    // Showing the result of the calculation in different colors depending on the result
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
            {/* Switch component to toggle dark mode */}
            <Switch
            value={isOn}
            onValueChange={t => setIsOn(t)}
            thumbColor={isOn ? 'ghostwhite' : 'grey'}
            trackColor={{true: 'ghostwhite'}}
            style={{transform: scale}}
            />
            <Text style={header}>Alcometer</Text>
            <Text style={headings}>Weight</Text>
            <TextInput style={input} keyboardType='decimal-pad' onChangeText={w => setWeight(w)}/>
            <Text style={headings}>Bottles</Text>
            {/* Numeric input styling changes based on wether the switch is on or off */}
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
            containerStyle={{backgroundColor: 'ghostwhite', marginBottom:20}}
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
            containerStyle={{backgroundColor: '#f0f0f0', marginBottom:20}}
            />
            }
            <RadioButton.Group  onValueChange={s => setSex(s)} value={sex}>
                <View style={lightStyle.radioStyle}>
                    <RadioButton uncheckedColor='darkgoldenrod' color='yellowgreen' value='male'/>
                    <Text style={texts}>Male</Text>
                </View>
                <View style={lightStyle.radioStyle}>
                    <RadioButton uncheckedColor='darkgoldenrod' color='yellowgreen' value='female'/>
                    <Text style={texts}>Female</Text>
                </View>
            </RadioButton.Group>
            <View style={lightStyle.resultStyle}>
                <Text style={texts}>Your blood alcohol level is</Text>
                <Text style={lightStyle.resultTextStyle}>{returnResult()}</Text>
            </View>
            <Pressable style={button} onPress={calculateAlcoholLevel}>
                <Text style={lightStyle.textStyle}>Calculate</Text>
            </Pressable>
        </View>
    );
}