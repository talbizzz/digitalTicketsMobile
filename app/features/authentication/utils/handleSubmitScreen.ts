export enum ScreenNames {
  name = 'RegistrationNameScreen',
  familyName = 'RegistrationFamilyNameScreen',
  birthday = 'RegistrationBirthdayScreen',
  phoneNumber = 'RegistrationPhoneNumberScreen',
  registrationMethodScreen = 'RegistrationMethodScreen',
}

export const handleSubmitScreen = (
  screenName: ScreenNames,
  navigation: any,
) => {
  switch (screenName) {
    case ScreenNames.name:
      navigation.navigate(ScreenNames.familyName);
      break;
    case ScreenNames.familyName:
      navigation.navigate(ScreenNames.birthday);
      break;
    case ScreenNames.birthday:
      navigation.navigate(ScreenNames.phoneNumber);
      break;
    case ScreenNames.phoneNumber:
      navigation.navigate(ScreenNames.registrationMethodScreen);
      break;
    default:
      break;
  }
};
