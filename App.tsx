/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, theme } from 'native-base';
import React from 'react';

import { MainStack } from './src/navigation /MainStack';

const App = () => {
  return (
    <NavigationContainer >
      <NativeBaseProvider theme={theme}>
        <MainStack />

      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
