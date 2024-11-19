import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const StrapiIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z" />
    </svg>
  );
};
