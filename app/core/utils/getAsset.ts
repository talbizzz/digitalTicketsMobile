/* This file is generated automatically by generateAssets.py. Do not edit it manually. 
The function getAsset() helps us to type our assets and avoid confusing require calls.
This is a wrapper for the base react native image handling => https://reactnative.dev/docs/images 
To update please run `npm run generateAssets.ts`*/
import {ImageSourcePropType} from 'react-native';
export type AssetName = 'backgroundImage';
export const assets: {[name in AssetName]: ImageSourcePropType} = {
  backgroundImage: require('../../assets/images/backgroundImage.png'),
};
export default function getAsset(name: AssetName) {
  return assets[name];
}
