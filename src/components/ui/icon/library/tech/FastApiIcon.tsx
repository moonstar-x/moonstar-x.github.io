import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const FastApiIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 .039c-6.627 0-12 5.354-12 11.96-.001 6.606 5.372 11.963 12 11.962 6.628 0 12.001-5.356 12-11.962C24 5.393 18.627.039 12 .039m-.829 5.415h7.55l-7.58 5.329h5.182L5.28 18.543Q8.226 12 11.171 5.455" />
    </svg>
  );
};
