import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import Alcometer from './components/Alcometer';

export default function App() {
  return (
      <ScrollView>
          <Alcometer />
          <StatusBar backgroundColor='#212120' style='light'/>
      </ScrollView>
  );
}
