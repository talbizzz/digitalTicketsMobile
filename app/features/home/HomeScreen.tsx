import {View, Text, StyleSheet} from 'react-native';
import {
  MainButton,
  MainButtonColor,
} from '../../core/components/buttons/MainButton';
import {useMainStore} from '../../core/store/mainStore';
import {getUser} from '../../core/store/userSlice';

export const HomeScreen = () => {
  const user = useMainStore(getUser);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user?.name}</Text>
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
