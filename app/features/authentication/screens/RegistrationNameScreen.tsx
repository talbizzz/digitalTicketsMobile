import {View, Text, StyleSheet} from 'react-native';
import {RegistrationScreensWrapper} from '../components/RegistrationScreensWrapper';
import {TextField} from '../../../core/components/textInput/TextField';
import {useEffect, useState} from 'react';
import {ScreenNames} from '../utils/handleSubmitScreen';
import {useMainStore} from '../../../core/store/mainStore';
import {RegistrationFlag} from '../../../core/store/registrationSlice';
import {IconButton} from '../../../core/components/buttons/IconButton';

export const RegistrationNameScreen = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const setRegistrationData = useMainStore(state => state.setRegistrationData);

  const errorMessage = 'Please enter your name.';

  const handleNext = () => {
    if (name.length < 1) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    return {
      screenName: ScreenNames.name,
      modifiedRegistrationFlag: 'name' as RegistrationFlag,
      flagValue: name,
    };
  };

  useEffect(() => {
    if (name.length > 0) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [name]);

  return (
    <RegistrationScreensWrapper
      headline="What is your name?"
      handleNext={handleNext}
      nextButtonDisabled={nextButtonDisabled}>
      <TextField
        textToTheLeft
        placeholder="John"
        value={name}
        onChangeText={setName}
        errorMessage={nameError ? errorMessage : undefined}
      />
    </RegistrationScreensWrapper>
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
