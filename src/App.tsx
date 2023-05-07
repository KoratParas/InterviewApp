/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import ModalNavigator from './navigators/ModalNavigator';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <ModalNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
