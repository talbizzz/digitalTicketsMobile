import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegistrationNameScreen} from '../../features/authentication/screens/RegistrationNameScreen';

export type AuthStackParams = {
  RegistrationNameScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      id="MainStack"
      screenOptions={{
        headerShown: false,
        // orientation: orientationUnlocked ? 'all' : 'portrait_up',
      }}>
      <Stack.Screen
        name="RegistrationNameScreen"
        component={RegistrationNameScreen}
      />
    </Stack.Navigator>
  );
};
