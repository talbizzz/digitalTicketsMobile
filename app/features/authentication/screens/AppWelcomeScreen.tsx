import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, Animated} from 'react-native';
import {ViewContainer} from '../../../core/components/ViewContainer';
import getAsset from '../../../core/utils/getAsset';
import {textStyles} from '../../../styles/textStyles';
import {colors} from '../../../styles/colors';
import {hexWithOpacity} from '../../../core/utils/helpers';
import {
  MainButton,
  MainButtonColor,
} from '../../../core/components/buttons/MainButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParams} from '../../../navigation/stacks/AuthStack';

export const AppWelcomeScreen = () => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const headlineOpacity = useState(new Animated.Value(0))[0];
  const buttonOpacity = useState(new Animated.Value(0))[0];
  useEffect(() => {
    setTimeout(() => {
      setShowHeadline(true);
      Animated.timing(headlineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 500);

    setTimeout(() => {
      setShowNextButton(true);
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  const handleNext = () => {
    navigation.navigate('AuthenticationTypeScreen');
  };

  return (
    <ViewContainer>
      <ImageBackground
        source={getAsset('backgroundImage')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.backgroundScreen} />
        {showHeadline && (
          <Animated.View
            style={[styles.innerTopContainer, {opacity: headlineOpacity}]}>
            <Text style={[textStyles.h1, styles.text]}>Digital Tickets</Text>
            <Text style={[textStyles.h2, styles.text]}>
              Shop, Scan, Save the planet.
            </Text>
          </Animated.View>
        )}
        {showNextButton && (
          <Animated.View
            style={[styles.innerBottomContainer, {opacity: buttonOpacity}]}>
            <View style={styles.buttonsContainer}>
              <MainButton
                title={'Next'}
                color={MainButtonColor.primary}
                onPress={handleNext}
              />
            </View>
          </Animated.View>
        )}
      </ImageBackground>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: hexWithOpacity(colors.black, 0.3),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  innerTopContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    gap: 20,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.white,
    marginTop: 5,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  innerBottomContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10,
  },
});
