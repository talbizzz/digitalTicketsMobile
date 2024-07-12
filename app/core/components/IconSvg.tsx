/* This component is generated automatically by generateAssets.py. Do not edit it manually. 
The component getAsset() helps us to use our theme on the svgs and make importing easier.
To update please run `npm run generateAssets.ts`*/
import {colors} from '../../styles/colors';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Back from '../../assets/svgs/Back.svg';
import Close from '../../assets/svgs/Close.svg';
import Eye from '../../assets/svgs/Eye.svg';
import EyeOff from '../../assets/svgs/EyeOff.svg';
import GoogleLogo from '../../assets/svgs/GoogleLogo.svg';
import Home from '../../assets/svgs/Home.svg';
import Localisation from '../../assets/svgs/Localisation.svg';
import Mail from '../../assets/svgs/Mail.svg';
import Profile from '../../assets/svgs/Profile.svg';
import Scanner from '../../assets/svgs/Scanner.svg';

export type SVGName =
  | 'Back'
  | 'Close'
  | 'Eye'
  | 'EyeOff'
  | 'GoogleLogo'
  | 'Home'
  | 'Localisation'
  | 'Mail'
  | 'Profile'
  | 'Scanner';

const svgs: {
  [name: string]: React.FC<
    SvgProps & {primary?: string | undefined; secondary?: string | undefined}
  >;
} = {
  Back: Back,
  Close: Close,
  Eye: Eye,
  EyeOff: EyeOff,
  GoogleLogo: GoogleLogo,
  Home: Home,
  Localisation: Localisation,
  Mail: Mail,
  Profile: Profile,
  Scanner: Scanner,
};

export type IconProps = {
  name: SVGName;
  primaryColor?: string;
  secondaryColor?: string;
} & SvgProps;

export const IconSVG = (props: IconProps) => {
  const {name, primaryColor, secondaryColor} = props;
  const Icon = svgs[name];
  return (
    <Icon
      {...props}
      primary={primaryColor ?? colors.primary}
      secondary={secondaryColor ?? colors.medium}
    />
  );
};
