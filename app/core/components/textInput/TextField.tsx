import React, {ForwardedRef, useState} from 'react';
import {
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../styles/colors';
import {textStyles} from '../../../styles/textStyles';
import {SVGName, IconSVG} from '../IconSvg';
import {hexWithOpacity} from '../../utils/helpers';
import {IconButton} from '../buttons/IconButton';

type Props = {
  style?: ViewStyle;
  textToTheLeft?: boolean;
  onChangeText?: (text: string) => void;
  onClick?: () => void;
  value?: string;
  errorMessage?: string;
  enableShowPassword?: boolean;
  onSubmitEditing?: (e: any) => void;
  label?: string;
  labelToTheLeft?: boolean;
  ref: any;
  icon?: SVGName;
  removeUnderline?: boolean;
  errorColor?: string;
  secureTextEntry?: boolean;
  fieldWithBackground?: boolean;
  backgroundColor?: string;
} & TextInputProps;

export type keyboardType = KeyboardTypeOptions | undefined;

export const TextField = React.forwardRef(
  (props: Props, ref: ForwardedRef<TextInput>) => {
    const [focused, setFocused] = useState(false);
    const [secure, setSecure] = useState(props.secureTextEntry);
    const showPressed = () => {
      if (props.enableShowPassword) {
        setSecure(!secure);
      }
    };
    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      props.onFocus?.(e);
    };
    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      props.onBlur?.(e);
    };
    const removeUnderline = props.removeUnderline || props.fieldWithBackground;
    return (
      <View style={[styles.container, props.style]}>
        {props.label && (
          <View
            style={[
              styles.labelContainer,
              {alignSelf: props.labelToTheLeft ? 'flex-start' : 'center'},
            ]}>
            <Text style={[styles.labelText]}>{props.label}</Text>
          </View>
        )}
        <View style={styles.containerTextField}>
          <TextInput
            {...props}
            placeholderTextColor={hexWithOpacity(colors.dark, 0.2)}
            onPressIn={() => {
              if (props.onClick) {
                props.onClick();
              }
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
              styles.textField,
              props.textToTheLeft
                ? styles.textAlignLeft
                : styles.textAlignCenter,
              !removeUnderline && {
                ...styles.underline,
                borderBottomColor: focused
                  ? colors.primary
                  : hexWithOpacity(colors.medium, 0.6),
              },
              props.fieldWithBackground && {
                backgroundColor: colors.light,
                borderRadius: 10,
                height: 60,
              },
            ]}
            secureTextEntry={secure}
            value={props.value}
            onChangeText={text => {
              if (props.onChangeText) {
                props.onChangeText(text);
              }
            }}
            returnKeyType="done"
            ref={ref}
            onSubmitEditing={props.onSubmitEditing}
          />
          {props.secureTextEntry && (
            <IconButton
              icon={secure ? 'Eye' : 'EyeOff'}
              onPress={showPressed}
              size={24}
              containerStyle={styles.passwordIconContainer}
            />
          )}
        </View>

        {props.errorMessage && (
          <Text
            style={[
              props.textToTheLeft
                ? styles.textAlignLeft
                : styles.textAlignCenter,
              styles.errorMessage,
              {color: props.errorColor ?? colors.error},
            ]}>
            {props.errorMessage}
          </Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerTextField: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  textField: {
    ...textStyles.body,
    color: colors.dark,
    paddingHorizontal: 10,
    minHeight: 40,
    flex: 1,
  },
  underline: {
    borderBottomWidth: 2,
  },
  errorMessage: {
    width: '100%',
    ...textStyles.small,
    color: colors.error,
    alignSelf: 'flex-start',
  },
  passwordIconContainer: {
    position: 'absolute',
    right: 10,
  },
  labelContainer: {
    width: '100%',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  labelText: {
    ...textStyles.mini,
    color: colors.primary,
  },
  image: {
    tintColor: colors.dark,
  },
});
