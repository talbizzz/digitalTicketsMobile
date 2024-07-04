declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      primary?: string;
      secondary?: string;
    }
  >;
  export default content;
}
