import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SVGName} from '../../core/components/IconSVG';
import {colors} from '../../styles/colors';
import {IconButton} from '../../core/components/buttons/IconButton';

interface IFooterItem {
  type: 'Icon';
  onPress?: () => void;
}

export interface IIcon extends IFooterItem {
  type: 'Icon';
  name: SVGName;
  loading?: boolean;
  isActive?: boolean;
  counter?: number;
}

type Props = {
  items: Array<IIcon | undefined>;
  style?: ViewStyle;
};

export const Footer = (props: Props) => {
  const insets = useSafeAreaInsets() ?? {bottom: 20};
  return (
    <View
      style={[
        styles.container,
        {
          bottom: Math.max(insets.bottom, 20),
        },
      ]}>
      <View style={styles.tabsContainer}>
        {props.items.map((item, index) => {
          return (
            <IconButton
              key={index}
              size={24}
              icon={item?.name}
              iconColor={colors.primary}
              bgColor={colors.background}
              backgroundFilled={item?.isActive}
              onPress={item?.onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    pointerEvents: 'box-none',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: colors.background,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    elevation: 5,
  },
});
