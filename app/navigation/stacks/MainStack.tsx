import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../features/home/HomeScreen';
import {TabNavigator} from '../TabNavigator';

export type MainStackParams = {
  TabNavigator: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      id="MainStack"
      screenOptions={{
        headerShown: false,
        // orientation: orientationUnlocked ? 'all' : 'portrait_up',
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
