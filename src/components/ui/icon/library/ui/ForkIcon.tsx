import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const ForkIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-38.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96h-48v70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288h-48c-53 0-96-43-96-96v-38.7C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0-48 0 24 24 0 1 0 48 0z" />
    </svg>
  );
};
