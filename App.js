import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { theme } from './constants';
import { HousesList, Footer } from './components';

const { FONTS, SIZES } = theme;

const App = () => {
  return (
    <View style={{padding: SIZES.padding2}}>
      <SafeAreaView/>
          <Text style={{...FONTS.h1}}>Inmobiliaria</Text>
      <ScrollView>
          <HousesList/>
          <Footer/>
      </ScrollView>
    </View>
  )
}

export default App;
