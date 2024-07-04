/* This component is generated automatically by generateAssets.py. Do not edit it manually. 
The component getAsset() helps us to use our theme on the svgs and make importing easier.
To update please run `npm run generateAssets.ts`*/
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Home from '../../assets/svgs/Home.svg';
import {colors} from '../../styles/colors';

export type SVGName = 'Home';

const svgs: {
  [name: string]: React.FC<
    SvgProps & {primary?: string | undefined; secondary?: string | undefined}
  >;
} = {Home: Home};

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
