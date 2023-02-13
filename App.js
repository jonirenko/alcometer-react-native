import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Alcometer from './components/Alcometer';
import Header from './components/Header';
import {lightStyle, darkStyle} from './styles/Styles';

export default function App() {
  return (
      <ScrollView contentContainerStyle={lightStyle.container}>
        <View>
          <Header/>
          <Text>Open up App.js to start working on your app!</Text>
          <Alcometer />
        </View>
      </ScrollView>
  );
}
