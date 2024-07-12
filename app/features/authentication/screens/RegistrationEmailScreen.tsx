import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {ViewContainer} from '../../../core/components/ViewContainer';
import {textStyles} from '../../../styles/textStyles';
import {colors} from '../../../styles/colors';
import {TextField} from '../../../core/components/textInput/TextField';
import {useEffect, useState} from 'react';
import {MainButton} from '../../../core/components/buttons/MainButton';
import Header from '../../../core/components/Header';
import {TextButton} from '../../../core/components/buttons/TextButton';
import {hexWithOpacity} from '../../../core/utils/helpers';
import {useHandleUserRegistration} from '../utils/useHandleUserRegistration';

/**
 * Starts with one or more characters that are not whitespace or @.
 * Contains exactly one @ symbol.
 * Follows the @ symbol with one or more characters that are not whitespace or @.
 * Contains exactly one dot (.) after the domain part.
 * Ends with one or more characters that are not whitespace or @ after the dot.
 * @param email
 * @returns
 */
const emailCheck = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Contains at least one digit (0-9).
 * Contains at least one lowercase letter (a-z).
 * Contains at least one uppercase letter (A-Z).
 * Contains at least one letter (either lowercase or uppercase).
 * Has a minimum length of 8 characters.
 * @param password
 * @returns
 */
const validatePassword = (password: string) => {
  const errors = [];
  if (password.length === 0) {
    return undefined;
  }
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one digit.');
  }
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }
  if (!/.{8,}/.test(password)) {
    errors.push('Password must be at least 8 characters long.');
  }

  return errors.length === 0 ? undefined : errors.join('\n');
};

export const RegistrationEmailScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | undefined
  >(undefined);
  const {registerUser} = useHandleUserRegistration();

  useEffect(() => {
    if (password !== repeatPassword && repeatPassword.length > 0) {
      setRepeatPasswordError(true);
    } else {
      setRepeatPasswordError(false);
    }
  }, [password, repeatPassword]);

  useEffect(() => {
    if (email.length > 0) {
      setEmailError(!emailCheck(email));
    }
  }, [email]);

  const handleSwitchToSignIn = () => {};
  const handleRegisterUser = () => {
    console.log('Register user');
    if (
      emailCheck(email) &&
      password.length > 0 &&
      password === repeatPassword
    ) {
      registerUser(email, password);
    }
  };

  return (
    <ViewContainer>
      <Header
        firstButtonLeft={{
          iconName: 'Back',
          primaryColor: colors.dark,
          onClick: () => {
            navigation.goBack();
          },
        }}
      />
      <View style={styles.headlineContainer}>
        <Text style={[textStyles.h1, styles.headlineText]}>Register</Text>
        <Text style={[textStyles.h3, styles.headlineText]}>Get Started</Text>
      </View>
      <View style={styles.formContainer}>
        <TextField
          value={email}
          onChangeText={setEmail}
          placeholder="John@doe.com"
          label="Email"
          textToTheLeft
          fieldWithBackground
          labelToTheLeft
          errorMessage={emailError ? 'Invalid email' : undefined}
          keyboardType="email-address"
        />
        <TextField
          value={password}
          onChangeText={setPassword}
          placeholder="**********"
          onBlur={() => setPasswordErrorMessage(validatePassword(password))}
          label="Password"
          textToTheLeft
          fieldWithBackground
          labelToTheLeft
          secureTextEntry
          enableShowPassword
          errorMessage={passwordErrorMessage}
        />
        <TextField
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          placeholder="**********"
          label="Repeat password"
          textToTheLeft
          fieldWithBackground
          labelToTheLeft
          secureTextEntry
          enableShowPassword
          errorMessage={
            repeatPasswordError ? 'Passwords do not match' : undefined
          }
        />
      </View>
      <View style={styles.nextButtonsContainer}>
        <TextButton
          title="Already have an account? Sign in"
          onPress={handleSwitchToSignIn}
          color={hexWithOpacity(colors.dark, 1)}
        />
        <MainButton
          title="Create an account"
          onPress={handleRegisterUser}
          bordersRounded
        />
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  headlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    gap: 20,
  },
  headlineText: {
    color: colors.primary,
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  nextButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
