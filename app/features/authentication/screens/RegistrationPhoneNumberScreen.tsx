import {View, Text, StyleSheet, Touchable} from 'react-native';
import {RegistrationScreensWrapper} from '../components/RegistrationScreensWrapper';
import {TextField} from '../../../core/components/textInput/TextField';
import {useEffect, useState} from 'react';
import {ScreenNames} from '../utils/handleSubmitScreen';
import DatePicker from 'react-native-date-picker';
import {
  CountryButton,
  CountryItem,
  CountryList,
  CountryPicker,
} from 'react-native-country-codes-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../styles/colors';
import {textStyles} from '../../../styles/textStyles';
import {RegistrationFlag} from '../../../core/store/registrationSlice';

export const RegistrationPhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+49');
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleNext = () => {
    return {
      screenName: ScreenNames.phoneNumber,
      modifiedRegistrationFlag: 'phoneNumber' as RegistrationFlag,
      flagValue: phoneNumber,
    };
  };

  useEffect(() => {
    if (phoneNumber.length > 0) {
      setNextButtonDisabled(false);
    }
  }, [phoneNumber]);

  return (
    <RegistrationScreensWrapper
      headline="What is your Phone number?"
      handleNext={handleNext}
      nextButtonDisabled={nextButtonDisabled}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.countryCodeContainer}
          onPress={() => setShowCountryPicker(true)}>
          <Text style={styles.countryCodeText}>{countryCode}</Text>
        </TouchableOpacity>
        <TextField
          textToTheLeft
          placeholder="1234567890"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.textField}
          keyboardType="phone-pad"
        />
      </View>
      <CountryPicker
        show={showCountryPicker}
        pickerButtonOnPress={(item: CountryItem) => {
          setCountryCode(item.dial_code);
          setShowCountryPicker(false);
        }}
        popularCountries={['en', 'de', 'fr', 'es', 'it', 'tu']}
        lang={'fr'}
        style={{
          modal: {
            height: '70%',
            backgroundColor: colors.background,
          },
        }}
      />
    </RegistrationScreensWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 24,
  },
  countryCodeContainer: {
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 5,
    marginBottom: 10,
  },
  textField: {
    flex: 1,
  },
  countryCodeText: {
    ...textStyles.smallCondensed,
    color: colors.white,
  },
});
