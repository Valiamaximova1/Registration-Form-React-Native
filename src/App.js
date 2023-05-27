import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <View style={styles.container}>
      <RegistrationForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
