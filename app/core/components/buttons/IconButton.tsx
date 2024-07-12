import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/colors';
import {IconSVG, SVGName} from '../IconSvg';
import {hexWithOpacity} from '../../utils/helpers';

type Props = {
  icon: SVGName | undefined;
  size: number;
  primaryColor?: string;
  secondaryColor?: string;
  bgColor?: string;
  onPress?: () => void;
  backgroundFilled?: boolean;
  disabled?: boolean;
  containerStyle?: any;
  backgroundCircleVisible?: boolean;
};

export const IconButton = (props: Props) => {
  const size = props.backgroundFilled ? props.size * 1.1 : props.size;

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[
        props.containerStyle,
        styles.container,
        props.backgroundFilled && {
          backgroundColor: props.bgColor ?? colors.primary,
          height: size * 2,
          width: size * 2,
        },
      ]}
      onPress={props.onPress}>
      <IconSVG
        name={props.icon as SVGName}
        primaryColor={
          props.backgroundFilled
            ? props.primaryColor ?? colors.dark
            : props.primaryColor ?? colors.primary
        }
        secondaryColor={props.secondaryColor ?? colors.medium}
        width={size}
        height={size}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
