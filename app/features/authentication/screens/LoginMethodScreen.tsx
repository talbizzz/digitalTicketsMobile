import {View, Text, ImageBackground, StyleSheet} from 'react-native';
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
import Header from '../../../core/components/Header';

export const LoginMethodScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();
  const handleEmailLogin = () => {
    navigation.navigate('LoginEmailScreen');
  };

  return (
    <ViewContainer>
      <Header
        headerTransparent
        firstButtonLeft={{
          iconName: 'Back',
          primaryColor: colors.background,
          onClick: () => {
            navigation.goBack();
          },
        }}
        buttonBackgroundCircleInvisible={true}
      />
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
        <View style={styles.innerBottomContainer}>
          <View style={styles.buttonsContainer}>
            <MainButton
              title={'Continue with Google'}
              color={MainButtonColor.white}
              iconName={'GoogleLogo'}
              bordersRounded
            />
            <MainButton
              title={'Continue with Mail'}
              color={MainButtonColor.white}
              iconName={'Mail'}
              iconPrimaryColor={hexWithOpacity(colors.black, 0.5)}
              onPress={handleEmailLogin}
              bordersRounded
            />
          </View>
        </View>
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
