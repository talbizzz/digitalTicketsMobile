import {View, Text, StyleSheet} from 'react-native';
import {MainButton} from '../../core/components/buttons/MainButton';
import {colors} from '../../styles/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainButton
        title="Next"
        onPress={() => console.log('Button pressed')}
        color={'primary'}
      />
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
