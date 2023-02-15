import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Alcometer from './components/Alcometer';
import {lightStyle, darkStyle} from './styles/Styles';

export default function App() {
  return (
      <ScrollView>
          <Alcometer />
      </ScrollView>
  );
}
