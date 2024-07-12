import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {SVGName} from '../IconSVG';
import {textStyles} from '../../../styles/textStyles';
import {colors} from '../../../styles/colors';
import {IconButton} from './IconButton';

type Props = {
  title: string;
  loading?: boolean;
  color?: string;
  icon?: SVGName;
  textStyle?: TextStyle;
  iconSize?: number;
} & TouchableOpacityProps;

export const TextButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={props.loading || props.disabled}
      style={[
        styles.container,
        props.style,
        props.loading || props.disabled ? styles.disabled : null,
      ]}>
      <Text
        style={[
          textStyles.button,
          styles.text,
          props.textStyle,
          props.color ? {color: props.color} : {color: colors.white},
        ]}>
        {props.title}
      </Text>
      {props.icon && (
        <IconButton
          icon={props.icon}
          size={props.iconSize ?? 20}
          primaryColor={props.color}
          disabled
        />
      )}
    </TouchableOpacity>
  );
};

type Styles = {
  container: ViewStyle;
  text: ViewStyle;
  disabled: ViewStyle;
  underline: TextStyle;
};
const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  text: {
    textAlign: 'center',
  },
  disabled: {opacity: 0.3},
});
