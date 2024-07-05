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

type MainButtonProps = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: 'primary' | 'white' | 'light';
  containerStyle?: ViewStyle | ViewStyle[];
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
          style={[
            {
              backgroundColor: props.color
                ? colors[props.color]
                : colors.primary,
            },
            styles.buttonContainer,
          ]}
          {...props}>
          <Text
            style={[
              textStyles.button,
              {
                color:
                  props.color === (colors.white || colors.light)
                    ? colors.dark
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
    borderRadius: 20,
  },
});
