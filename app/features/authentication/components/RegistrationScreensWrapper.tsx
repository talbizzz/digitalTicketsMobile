import React, {Children, FunctionComponent, ReactElement, useMemo} from 'react';
import {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSVG} from '../../../core/components/IconSVG';
import Header from '../../../core/components/Header';
import {IconButton} from '../../../core/components/buttons/IconButton';
import {ViewContainer} from '../../../core/components/ViewContainer';
import {colors} from '../../../styles/colors';
import {textStyles} from '../../../styles/textStyles';
import {MainButton} from '../../../core/components/buttons/MainButton';
import {handleSubmitScreen, ScreenNames} from '../utils/handleSubmitScreen';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../../navigation/stacks/MainStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../../navigation/stacks/AuthStack';
import {RegistrationFlag} from '../../../core/store/registrationSlice';
import {useMainStore} from '../../../core/store/mainStore';

type RegistrationScreenWrapperProps = {
  handleNext: () => {
    screenName: ScreenNames;
    modifiedRegistrationFlag: RegistrationFlag;
    flagValue: any;
  };
  headline?: string;
  children?: ReactNode;
  loading?: boolean;
  nextButtonDisabled?: boolean;
};

type Props = RegistrationScreenWrapperProps;

export const RegistrationScreensWrapper = (props: Props) => {
  const navigation = useNavigation();
  const setRegistrationData = useMainStore(state => state.setRegistrationData);
  const setRegistrationFlag = useMainStore(state => state.setRegistrationFlag);
  const setRegistrationCompleted = useMainStore(
    state => state.setRegistrationCompleted,
  );

  const handleNext = () => {
    const {screenName, modifiedRegistrationFlag, flagValue} =
      props.handleNext();
    setRegistrationFlag(modifiedRegistrationFlag, true);
    setRegistrationData(modifiedRegistrationFlag, flagValue);
    handleSubmitScreen(screenName, navigation);
    if (flagValue === 'phoneNumber') {
      setRegistrationCompleted(true);
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
      <ViewContainer style={styles.container}>
        {props.headline && (
          <Text style={[textStyles.h2, styles.text]}>{props.headline}</Text>
        )}
        <View style={styles.childrenContainer}>{props.children}</View>
      </ViewContainer>
      <MainButton
        title={'Next'}
        containerStyle={styles.nextButton}
        onPress={handleNext}
        disabled={props.nextButtonDisabled}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    color: colors.primary,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  childrenContainer: {
    width: '100%',
    marginTop: 40,
  },
});
