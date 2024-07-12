import React, {StyleSheet, View, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../styles/colors';

type Props = {
  safeAreaTopOff?: boolean;
  safeAreaBottomOff?: boolean;
} & ViewProps;
export const ViewContainer = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={[
        styles.container,
        props.safeAreaTopOff ? {} : {paddingTop: insets.top},
        props.safeAreaBottomOff ? {} : {paddingBottom: insets.bottom},
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
