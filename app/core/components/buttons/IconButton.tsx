import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../styles/colors';
import {IconSVG, SVGName} from '../IconSvg';

type Props = {
  icon: SVGName | undefined;
  size: number;
  iconColor?: string;
  bgColor?: string;
  onPress?: () => void;
  backgroundFilled?: boolean;
};

export const IconButton = (props: Props) => {
  const size = props.backgroundFilled ? props.size * 1.1 : props.size;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundFilled
            ? props.iconColor ?? colors.primary
            : props.bgColor ?? 'none',
          height: size * 2,
          width: size * 2,
        },
      ]}
      onPress={props.onPress}>
      <IconSVG
        name={props.icon as SVGName}
        size={size}
        color={
          props.backgroundFilled
            ? props.bgColor ?? 'none'
            : props.iconColor ?? colors.primary
        }
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
