import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack, MainStackParams} from './MainStack';
import {AuthStack, AuthStackParams} from './AuthStack';

export type StackParams<T> = {screen: keyof T; params: T[keyof T]};

export type AppStackParams = {
  MainStack: StackParams<MainStackParams>;
  AuthStack: StackParams<AuthStackParams>;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const loggedIn = true;

  const switchStack = () => {
    if (loggedIn) {
      return <Stack.Screen name="MainStack" component={MainStack} />;
    }
    return <Stack.Screen name="AuthStack" component={AuthStack} />;
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          orientation: 'portrait_up',
        }}>
        {switchStack()}
      </Stack.Navigator>
    </>
  );
};
