import { StyleSheet } from "react-native";

    const lightStyle = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        header: {
            fontSize: 24,
        },
        radioStyle: {
            flexDirection: 'row',
            alignItems: 'center'
        }
      });

    const darkStyle = StyleSheet.create({
        container: {
          ...lightStyle.container,
          backgroundColor: '#000',
        },
      });

    export {darkStyle, lightStyle};