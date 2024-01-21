import React from 'react';
import clsx from 'clsx';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon?: React.ReactNode
}

export const TimelineItem: React.FC<Props> = ({ className, children, icon, ...props }) => {
  return (
    <div className="relative w-full pb-[2rem]" {...props}>
      <div className="absolute bg-primary w-[22px] h-[22px] rounded-[50%] left-[-12px]">
        {
          icon && (
            <div className="w-full h-full p-[4px] flex items-center justify-center">
              {icon}
            </div>
          )
        }
      </div>

      <div className={clsx('ml-[25px]', className)}>
        {children}
      </div>
    </div>
  );
};
