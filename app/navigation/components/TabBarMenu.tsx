import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Footer, IIcon} from './Footer';

type Props = BottomTabBarProps;

export const TabBarMenu = (props: Props) => {
  const routes = props.state.routes;
  const currentIndex = props.state.index;

  const onTabBarButtonPressed = (route: Route<string>) => {
    props.navigation.navigate(route.name);
  };

  const items: Array<IIcon | undefined> = [
    {
      type: 'Icon',
      name: 'Home',
      isActive: currentIndex === 0,
      onPress: () => onTabBarButtonPressed(routes[0]),
    },
    {
      type: 'Icon',
      name: 'Scanner',
      isActive: currentIndex === 1,
      onPress: () => onTabBarButtonPressed(routes[1]),
      // counter: unreadIntercomMessages,
    },
    {
      type: 'Icon',
      name: 'Localisation',
      isActive: currentIndex === 2,
      onPress: () => onTabBarButtonPressed(routes[2]),
    },
    {
      type: 'Icon',
      name: 'Profile',
      isActive: currentIndex === 3,
      onPress: () => onTabBarButtonPressed(routes[3]),
    },
  ];

  return <Footer items={items} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
