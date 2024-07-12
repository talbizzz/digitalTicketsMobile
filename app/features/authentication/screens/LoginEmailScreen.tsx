import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {ViewContainer} from '../../../core/components/ViewContainer';
import {textStyles} from '../../../styles/textStyles';
import {colors} from '../../../styles/colors';
import {TextField} from '../../../core/components/textInput/TextField';
import {useState} from 'react';
import {MainButton} from '../../../core/components/buttons/MainButton';
import Header from '../../../core/components/Header';
import {TextButton} from '../../../core/components/buttons/TextButton';
import {hexWithOpacity} from '../../../core/utils/helpers';
import {loginUser} from '../utils/loginUser';
import {useHandleUserLogin} from '../utils/useHandleUserLogin';
import {useMainStore} from '../../../core/store/mainStore';

export const LoginEmailScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleLoginUser} = useHandleUserLogin();

  const handleSwitchToSignUp = () => {};
  const handleLogin = async () => {
    console.log('login User');
    if (email.length > 0 && password.length > 0) {
      await handleLoginUser(email, password);
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
        <Text style={[textStyles.h1, styles.headlineText]}>Login</Text>
        <Text style={[textStyles.h3, styles.headlineText]}>Welcome back</Text>
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
          keyboardType="email-address"
        />
        <TextField
          value={password}
          onChangeText={setPassword}
          placeholder="**********"
          label="Password"
          textToTheLeft
          fieldWithBackground
          labelToTheLeft
          secureTextEntry
          enableShowPassword
          errorMessage={''}
        />
      </View>
      <View style={styles.nextButtonsContainer}>
        <TextButton
          title="No account yet? Sign up"
          onPress={handleSwitchToSignUp}
          color={hexWithOpacity(colors.dark, 1)}
        />
        <MainButton title="Login" onPress={handleLogin} bordersRounded />
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
