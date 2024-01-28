import React from 'react';

interface Props {

}

export const TimelineOrigin: React.FC<Props> = () => {
  return (
    <div className="relative w-full pb-[22px]">
      <div className="absolute bg-primary w-[22px] h-[22px] rounded-[50%] left-[-10px]">
        <div className="w-1/2 h-1/2 rounded-[50%] bg-white translate-x-[50%] translate-y-[50%]" />
      </div>
    </div>
  );
};
