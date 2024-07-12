import {View, Text, StyleSheet} from 'react-native';
import {RegistrationScreensWrapper} from '../components/RegistrationScreensWrapper';
import {TextField} from '../../../core/components/textInput/TextField';
import {useEffect, useState} from 'react';
import {ScreenNames} from '../utils/handleSubmitScreen';
import DatePicker from 'react-native-date-picker';
import {RegistrationFlag} from '../../../core/store/registrationSlice';

export const RegistrationBirthdayScreen = () => {
  const [date, setDate] = useState<Date>();
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const handleNext = () => {
    return {
      screenName: ScreenNames.birthday,
      modifiedRegistrationFlag: 'birthday' as RegistrationFlag,
      flagValue: date,
    };
  };

  useEffect(() => {
    if (date) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }
  }, [date]);

  return (
    <RegistrationScreensWrapper
      headline="When is your birthday?"
      handleNext={handleNext}
      nextButtonDisabled={nextButtonDisabled}>
      <View style={styles.container}>
        <DatePicker
          date={date ?? new Date()}
          onDateChange={setDate}
          mode="date"
        />
      </View>
    </RegistrationScreensWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
