import React, {useEffect} from 'react';
import {View} from 'react-native';
import Config from 'react-native-config';
import firestore from '@react-native-firebase/firestore';
import {IconButton} from './app/core/components/buttons/IconButton';
import {colors} from './app/styles/colors';

function App() {
  useEffect(() => {
    firestore()
      .collection('test')
      .add({
        name: `Hello from ${Config.ENV}`,
        age: 30,
      })
      .then(() => {
        console.log('Data added!');
      })
      .catch(error => {
        console.log('Error adding data: ', error);
      });
  });
  return (
    <View style={{marginTop: 40, flex: 1}}>
      <IconButton icon="Home" size={24} iconColor={colors.blue} />
    </View>
  );
}

export default App;
