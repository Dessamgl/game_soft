import React from 'react';
import { StatusBar } from 'react-native';
import Home from './Home';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F07E26" />
      <Home />
    </>
  );
};

export default App;
