import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I kiss my homies goodnight!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
