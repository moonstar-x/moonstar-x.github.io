import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const LevelIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid"
      viewBox="-36.5 0 329 329"
      {...props}
    >
      <path
        d="M128 72.17 0 135.367v128.535l128 64.268 128-64.268V135.367L128 72.17Z"
      />
      <path
        d="M128 51.745 0 114.94v128.536l128 64.268 128-64.268V114.94L128 51.745Z"
        opacity={0.553}
      />
      <path
        d="M128 0 0 63.197v128.535L128 256l128-64.268V63.197L128 0Z"
        opacity={0.553}
      />
      <path
        d="M128 122.795 0 62.638v128.908L128 256l128-64.454V62.638l-128 60.157Z"
        opacity={0.553}
      />
    </svg>
  );
};
