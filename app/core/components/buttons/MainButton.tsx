import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import {CircleSnail} from 'react-native-progress';
import {colors} from '../../../styles/colors';
import {textStyles} from '../../../styles/textStyles';
import {opacity} from 'react-native-reanimated/lib/typescript/Colors';
import {IconSVG, SVGName} from '../IconSVG';
import {IconButton} from './IconButton';
import {hexWithOpacity} from '../../utils/helpers';

export enum MainButtonColor {
  primary = 'primary',
  white = 'white',
  light = 'light',
}

type MainButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: MainButtonColor;
  containerStyle?: ViewStyle | ViewStyle[];
  iconName?: SVGName;
  iconPrimaryColor?: string;
  iconSecondaryColor?: string;
  bordersRounded?: boolean;
} & TouchableOpacityProps;

export const MainButton = (props: MainButtonProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.loading ? (
        <CircleSnail
          size={25}
          thickness={2}
          indeterminate={true}
          borderWidth={0}
          color={props.color ? colors[props.color] : colors.primary}
          unfilledColor={colors.light}
        />
      ) : (
        <TouchableOpacity
          disabled={props.disabled}
          style={[
            {
              backgroundColor: props.color
                ? colors[props.color]
                : colors.primary,
              opacity: props.disabled ? 0.5 : 1,
            },
            styles.buttonContainer,
            {
              paddingLeft: props.iconName ? 10 : 20,
              borderRadius: props.bordersRounded ? 100 : 20,
            },
          ]}
          {...props}>
          {props.iconName && (
            <IconButton
              icon={props.iconName}
              primaryColor={props.iconPrimaryColor}
              secondaryColor={props.iconSecondaryColor}
              size={24}
              disabled
            />
          )}
          <Text
            style={[
              textStyles.button,
              {
                color:
                  props.color ===
                  (MainButtonColor.white || MainButtonColor.light)
                    ? hexWithOpacity(colors.black, 0.6)
                    : colors.white,
              },
            ]}>
            {props.title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
    minHeight: 50,
    paddingRight: 20,
  },
});
