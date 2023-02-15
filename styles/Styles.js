import { StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";

    const lightStyle = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black'
        },
        header: {
            fontSize: 24,
            marginBottom: 20
        },
        radioStyle: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textInputStyle: {
          width: 380,
          borderBottomWidth: 1,
          backgroundColor: 'lightgrey',
          marginBottom: 20
        },
        headingsStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop: 10
        },
        numInputStyle: {
          backgroundColor: 'lightgrey'
        }
      });

    const darkStyle = StyleSheet.create({
        container: {
          ...lightStyle.container,
          backgroundColor: '#212120',
          color: 'white'
        },
        header: {
          ...lightStyle.header,
          color: 'white'
        },
        textInputStyle: {
          ...lightStyle.textInputStyle,
          backgroundColor: 'ghostwhite'
        },
        headingsStyle: {
          ...lightStyle.headingsStyle,
          color: 'white'
        }
      });

    const resultStyle = StyleSheet.create({
        goodColor: {
          color: 'green'
        },
        warningColor: {
          color: 'yellow'
        },
        badColor: {
          color: 'red'
        }
    });

    export {darkStyle, lightStyle, resultStyle};