import {StyleSheet, TextStyle} from 'react-native';
import {colors} from './colors';

export type TextStyles = {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  body: TextStyle;
  small: TextStyle;
  smallCondensed: TextStyle;
  mini: TextStyle;
  button: TextStyle;
  numbers: TextStyle;
};

const dmSans = 'DMSans-Regular';
const barlow = 'Barlow-Regular';

export const textStyles = StyleSheet.create<TextStyles>({
  h1: {
    fontFamily: dmSans,
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
    color: colors.dark,
  },
  h2: {
    fontFamily: dmSans,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: colors.dark,
  },
  h3: {
    fontFamily: dmSans,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.dark,
  },
  h4: {
    fontFamily: dmSans,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.dark,
  },
  body: {
    fontFamily: dmSans,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.dark,
  },
  small: {
    fontFamily: dmSans,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.dark,
  },
  smallCondensed: {
    fontFamily: barlow,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.dark,
  },
  mini: {
    fontFamily: barlow,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14,
    letterSpacing: 0,
    color: colors.dark,
  },
  button: {
    fontFamily: dmSans,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.dark,
  },
  numbers: {
    fontFamily: barlow,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.dark,
  },
});
