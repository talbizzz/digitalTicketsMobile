/* This component is generated automatically by generateAssets.py. Do not edit it manually. 
The component getAsset() helps us to use our theme on the svgs and make importing easier.
To update please run `npm run generateAssets.ts`*/
import {colors} from '../../styles/colors';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Home from '../../assets/svgs/Home.svg';
import Localisation from '../../assets/svgs/Localisation.svg';
import Profile from '../../assets/svgs/Profile.svg';
import Scanner from '../../assets/svgs/Scanner.svg';

export type SVGName = 'Home' | 'Localisation' | 'Profile' | 'Scanner';

const svgs: {
  [name: string]: React.FC<
    SvgProps & {primary?: string | undefined; secondary?: string | undefined}
  >;
} = {
  Home: Home,
  Localisation: Localisation,
  Profile: Profile,
  Scanner: Scanner,
};

type Props = {name: SVGName; color?: string; size?: number} & SvgProps;

export const IconSVG = (props: Props) => {
  const {name, color, size} = props;
  const Icon = svgs[name];
  return (
    <Icon
      {...props}
      fill={color ?? colors.primary}
      width={size ?? 24}
      height={size ?? 24}
    />
  );
};
