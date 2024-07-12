import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {CircleSnail} from 'react-native-progress';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../styles/colors';
import {textStyles} from '../../styles/textStyles';
import {SVGName} from './IconSvg';
import {IconButton} from './buttons/IconButton';

type Button = {
  iconName: SVGName;
  onClick: () => void;
  disabled?: boolean;
  primaryColor?: string;
  loading?: boolean;
};
type ModifiedButton = {
  iconName: SVGName;
  onClick: () => void;
  disabled?: boolean;
  primaryColor?: string;
  loading?: boolean;
  backgroundCircleVisible: boolean;
  backgroundOpacityValue: number;
};
type Props = {
  title?: string;
  firstButtonLeft?: Button;
  firstButtonRight?: Button;
  secondButtonLeft?: Button;
  placeholderSecondButtonLeft?: boolean;
  secondButtonRight?: Button;
  backFilled?: boolean;
  headerTransparent?: boolean;
  titleShown?: boolean;
  buttonBackgroundCircleInvisible?: boolean;
  noSafeArea?: boolean;
  style?: ViewStyle;
  titleColor?: string;
  noBorder?: boolean;
};

/**
 * this function should be imported in the parent component,
 * and given the right parameters it will take care of setting the props variable headerTransparent
 * @param transparencySwitchPoint : the point at which the transparency should be toggled
 * @param setHeaderTransparent : the function that takes care of toggling your transparency (should be declared as [state, setState] var in parent)
 * @param event (the scroll event from your parent component)
 */
export const updateHeaderTransparency = (
  transparencySwitchPoint: number,
  setHeaderTransparent: (value: boolean) => void,
  event: any,
) => {
  setHeaderTransparent(
    !(Math.abs(event.nativeEvent.contentOffset.y) > transparencySwitchPoint),
  );
};

// exact same as @updateHeaderTransparency only this is for whether the title is shown. chose to duplicate the code for better readability.
export const updateTitleShown = (
  titleShownSwitchPoint: number,
  setTitleIsShown: (value: boolean) => void,
  event: any,
) => {
  setTitleIsShown(event.nativeEvent.contentOffset.y > titleShownSwitchPoint);
};

/**
 * This component will have 4 possible buttons
 * FirstButtonLeft * SecondButtonLeft * FirstButtonRight * SecondButtonRight
 * The Buttons will be 100% customisable, their onClick Function,
 * as well as the name of the icon to be used will both be passed through the parent component
 * The component will also have a title component to be passed through the props
 * @param props
 * @returns
 */
const Header = (props: Props) => {
  const backgroundOpacity = useRef(new Animated.Value(0)).current;
  const [backgroundOpacityValue, setBackgroundOpacityValue] = useState(
    backgroundOpacity ? 0 : 1,
  );
  const safeArea = useSafeAreaInsets();
  const safeAreaTop = safeArea.top === 0 ? 10 : safeArea.top;

  useEffect(
    function modifyHeaderBgOpacityAccordingToScrollPosition() {
      Animated.timing(backgroundOpacity, {
        toValue: props.headerTransparent ? 0 : 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.headerTransparent],
  );

  useEffect(function startEventListenerOnBackgroundOpacity() {
    const listenerId = backgroundOpacity.addListener(({value}) => {
      setBackgroundOpacityValue(value);
    });

    return () => {
      backgroundOpacity.removeListener(listenerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {
          backgroundColor: props.headerTransparent
            ? `rgba(255,255,255,${backgroundOpacityValue})`
            : colors.background,
          paddingTop: !props.noSafeArea ? safeAreaTop : 0,
          borderBottomWidth:
            props.noBorder || props.headerTransparent || !props.titleShown
              ? 0
              : 1,
        },
        props.style,
      ]}>
      <View style={styles.buttonsContainer}>
        {props.firstButtonLeft ? (
          <Button
            iconName={props.firstButtonLeft.iconName}
            onClick={props.firstButtonLeft.onClick}
            disabled={props.firstButtonLeft.disabled}
            backgroundCircleVisible={
              (props.headerTransparent &&
                !props.buttonBackgroundCircleInvisible) as boolean
            }
            backgroundOpacityValue={0}
            primaryColor={props.firstButtonLeft.primaryColor}
            loading={props.firstButtonLeft.loading}
          />
        ) : (
          <View style={styles.buttonViewFiller} />
        )}
        {props.secondButtonLeft ? (
          <Button
            iconName={props.secondButtonLeft.iconName}
            onClick={props.secondButtonLeft.onClick}
            disabled={props.secondButtonLeft.disabled}
            backgroundCircleVisible={
              (props.headerTransparent &&
                !props.buttonBackgroundCircleInvisible) as boolean
            }
            backgroundOpacityValue={0}
            primaryColor={props.secondButtonLeft.primaryColor}
            loading={props.secondButtonLeft.loading}
          />
        ) : props.placeholderSecondButtonLeft ? (
          <View style={styles.buttonViewFiller} />
        ) : (
          <></>
        )}
      </View>

      <View style={styles.titleViewFiller}>
        {props.titleShown && (
          <Text
            style={[
              styles.titleText,
              props.titleColor ? {color: props.titleColor} : {},
            ]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.title}
          </Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        {props.firstButtonRight ? (
          <Button
            iconName={props.firstButtonRight.iconName}
            onClick={props.firstButtonRight.onClick}
            disabled={props.firstButtonRight.disabled}
            backgroundCircleVisible={
              (props.headerTransparent &&
                !props.buttonBackgroundCircleInvisible) as boolean
            }
            backgroundOpacityValue={0}
            primaryColor={props.firstButtonRight.primaryColor}
            loading={props.firstButtonRight.loading}
          />
        ) : (
          <></>
        )}
        {props.secondButtonRight ? (
          <Button
            iconName={props.secondButtonRight.iconName}
            onClick={props.secondButtonRight.onClick}
            disabled={props.secondButtonRight.disabled}
            backgroundCircleVisible={
              (props.headerTransparent &&
                !props.buttonBackgroundCircleInvisible) as boolean
            }
            backgroundOpacityValue={0}
            primaryColor={props.secondButtonRight.primaryColor}
            loading={props.secondButtonRight.loading}
          />
        ) : (
          <View style={styles.buttonViewFiller} />
        )}
      </View>
    </Animated.View>
  );
};

const Button = (props: ModifiedButton) => {
  return props.loading ? (
    <View style={styles.buttonIsLoading}>
      <CircleSnail size={24} color={colors.white} />
    </View>
  ) : (
    <IconButton
      disabled={props.disabled}
      onPress={props.onClick}
      size={24}
      icon={props.iconName}
      primaryColor={
        props.primaryColor ??
        (props.backgroundCircleVisible ? colors.dark : colors.primary)
      }
      backgroundFilled={props.backgroundCircleVisible}
      bgColor={colors.background}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    pointerEvents: 'box-none',
    display: 'flex',
    position: 'absolute',
    zIndex: 100,
    paddingHorizontal: 6,
    borderBottomColor: colors.light,
  },
  buttonViewFiller: {
    width: 48,
    height: 48,
  },
  titleViewFiller: {
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {flexDirection: 'row'},
  buttonIsLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...textStyles.h3,
  },
});

export default Header;
