import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStack, MainStackParams} from './MainStack';
import AuthStack, {AuthStackParams} from './AuthStack';
import {useHandleUserAuthentication} from './utils/useHandleUserAuthentication';
import {useEffect} from 'react';
import {useMainStore} from '../../core/store/mainStore';

export type StackParams<T> = {screen: keyof T; params: T[keyof T]};

export type AppStackParams = {
  MainStack: StackParams<MainStackParams>;
  AuthStack: StackParams<AuthStackParams>;
};

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const {isLoggedIn} = useHandleUserAuthentication();

  const switchStack = () => {
    if (isLoggedIn) {
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
