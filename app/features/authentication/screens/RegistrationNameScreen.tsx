import {View, Text, StyleSheet} from 'react-native';

export const RegistrationNameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration Name Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
