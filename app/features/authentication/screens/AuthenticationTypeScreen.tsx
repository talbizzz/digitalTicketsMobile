import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
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
import {IconSVG} from '../../../core/components/IconSVG';
import {TextButton} from '../../../core/components/buttons/TextButton';
import {AuthStackParams} from '../../../navigation/stacks/AuthStack';

export const AuthenticationTypeScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  const onRegistrationClick = () => {
    navigation.navigate('RegistrationNameScreen');
  };
  const onSignInClick = () => {
    navigation.navigate('LoginMethodScreen');
  };

  const [bottomOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(bottomOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ViewContainer>
      <ImageBackground
        source={getAsset('backgroundImage')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.backgroundScreen} />
        <View style={styles.innerTopContainer}>
          <Text style={[textStyles.h1, styles.text]}>Digital Tickets</Text>
          <Text style={[textStyles.h2, styles.text]}>
            Shop, Scan, Save the planet.
          </Text>
        </View>
        <Animated.View
          style={[styles.innerBottomContainer, {opacity: bottomOpacity}]}>
          <View style={styles.buttonsContainer}>
            <TextButton
              title={'Create an account'}
              onPress={onRegistrationClick}
            />
            <TextButton title={'Sign in'} onPress={onSignInClick} />
          </View>
        </Animated.View>
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
