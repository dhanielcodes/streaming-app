import React from 'react';
import {Path, Svg} from 'react-native-svg';

export default function BackIcon(props) {
  return (
    <Svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 13L1 7L7 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
