import {View, Text, StyleSheet} from 'react-native';
import {RegistrationScreensWrapper} from '../components/RegistrationScreensWrapper';
import {TextField} from '../../../core/components/textInput/TextField';
import {useEffect, useState} from 'react';
import {ScreenNames} from '../utils/handleSubmitScreen';
import {RegistrationFlag} from '../../../core/store/registrationSlice';

export const RegistrationFamilyNameScreen = () => {
  const [familyName, setFamilyName] = useState('');
  const [error, setError] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const errorMessage = 'Please enter your name.';

  const handleNext = () => {
    if (familyName.length < 1) {
      setError(true);
    } else {
      setError(false);
    }
    return {
      screenName: ScreenNames.familyName,
      modifiedRegistrationFlag: 'familyName' as RegistrationFlag,
      flagValue: familyName,
    };
  };

  useEffect(() => {
    if (familyName.length > 0) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [familyName]);

  return (
    <RegistrationScreensWrapper
      headline="What is your family name?"
      handleNext={handleNext}
      nextButtonDisabled={nextButtonDisabled}>
      <TextField
        textToTheLeft
        placeholder="Doe"
        value={familyName}
        onChangeText={setFamilyName}
        errorMessage={error ? errorMessage : undefined}
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
