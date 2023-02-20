import { StyleSheet } from "react-native";
import  Constants  from "expo-constants";

    const lightStyle = StyleSheet.create({
        container: {
          marginTop: Constants.statusBarHeight,
          paddingTop: 20,
          paddingBottom: 90,
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black'
        },
        header: {
            fontSize: 26,
            marginBottom: 20
        },
        radioStyle: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        textStyle: {
          fontSize: 18,
          color: 'black'
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
        },
        resultStyle: {
          marginTop: 20,
          marginBottom: 20,
          alignItems: 'center'
        },
        resultTextStyle: {
          fontSize: 25,
        },
        buttonStyle: {
          borderWidth: 2,
          borderRadius: 4,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: 'whitesmoke',
          marginBottom: 20,
        },
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
        },
        textStyle: {
          ...lightStyle.textStyle,
          color: 'ghostwhite'
        },
        buttonStyle: {
          ...lightStyle.buttonStyle,
          backgroundColor: 'ghostwhite',
          borderColor: 'darkgoldenrod'
        }
      });

    const resultStyle = StyleSheet.create({
        goodColor: {
          color: 'green'
        },
        warningColor: {
          color: 'gold'
        },
        badColor: {
          color: 'red'
        },
        
    });

    export {darkStyle, lightStyle, resultStyle};