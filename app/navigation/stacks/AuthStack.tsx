import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegistrationNameScreen} from '../../features/authentication/screens/RegistrationNameScreen';
import {RegistrationFamilyNameScreen} from '../../features/authentication/screens/RegistrationFamilyNameScreen';
import {RegistrationBirthdayScreen} from '../../features/authentication/screens/RegistrationBirthdayScreen';
import {RegistrationPhoneNumberScreen} from '../../features/authentication/screens/RegistrationPhoneNumberScreen';
import {useHandleUserRegistration} from '../../features/authentication/utils/useHandleUserRegistration';
import {RegistrationMethodScreen} from '../../features/authentication/screens/RegistrationMethodScreen';
import {RegistrationEmailScreen} from '../../features/authentication/screens/RegistrationEmailScreen';
import {AppWelcomeScreen} from '../../features/authentication/screens/AppWelcomeScreen';
import {AuthenticationTypeScreen} from '../../features/authentication/screens/AuthenticationTypeScreen';
import {LoginMethodScreen} from '../../features/authentication/screens/LoginMethodScreen';
import {LoginEmailScreen} from '../../features/authentication/screens/LoginEmailScreen';

export type AuthStackParams = {
  RegistrationNameScreen: undefined;
  RegistrationFamilyNameScreen: undefined;
  RegistrationBirthdayScreen: undefined;
  RegistrationPhoneNumberScreen: undefined;
  RegistrationMethodScreen: undefined;
  RegistrationEmailScreen: undefined;
  AppWelcomeScreen: undefined;
  AuthenticationTypeScreen: undefined;
  LoginMethodScreen: undefined;
  LoginEmailScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  useHandleUserRegistration();

  return (
    <Stack.Navigator
      id="AuthStack"
      screenOptions={{
        headerShown: false,
        // orientation: orientationUnlocked ? 'all' : 'portrait_up',
      }}
      initialRouteName="AppWelcomeScreen">
      <Stack.Screen name="AppWelcomeScreen" component={AppWelcomeScreen} />
      <Stack.Screen name="LoginEmailScreen" component={LoginEmailScreen} />
      <Stack.Screen
        name="AuthenticationTypeScreen"
        component={AuthenticationTypeScreen}
      />
      <Stack.Screen name="LoginMethodScreen" component={LoginMethodScreen} />
      <Stack.Screen
        name="RegistrationNameScreen"
        component={RegistrationNameScreen}
      />
      <Stack.Screen
        name="RegistrationFamilyNameScreen"
        component={RegistrationFamilyNameScreen}
      />
      <Stack.Screen
        name="RegistrationBirthdayScreen"
        component={RegistrationBirthdayScreen}
      />
      <Stack.Screen
        name="RegistrationPhoneNumberScreen"
        component={RegistrationPhoneNumberScreen}
      />
      <Stack.Screen
        name="RegistrationMethodScreen"
        component={RegistrationMethodScreen}
      />
      <Stack.Screen
        name="RegistrationEmailScreen"
        component={RegistrationEmailScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
