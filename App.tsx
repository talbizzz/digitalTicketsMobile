import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';
import firestore from '@react-native-firebase/firestore';

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
      <Text>Environment: {Config.ENV}</Text>
    </View>
  );
}

export default App;
