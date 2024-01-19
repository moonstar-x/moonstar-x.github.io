import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const CloudDownloadIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9-.1-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 59.3 0 111 32.2 138.7 80.2A95.51 95.51 0 0 1 448 96c53 0 96 43 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167 80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v134.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
    </svg>
  );
};
