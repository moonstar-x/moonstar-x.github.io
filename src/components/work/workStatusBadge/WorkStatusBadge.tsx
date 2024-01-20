import React from 'react';
import clsx from 'clsx';
import { Badge, BadgeProps } from '@components/ui/badge';
import { WorkStatus } from '@lib/services/work';
import { str } from '@lib/services/strings';

export type StatusBadgeObject = {
  badgeStyle: string
  text: string
  emoji: string
};
const styleMap: Record<WorkStatus, StatusBadgeObject> = {
  completed: {
    badgeStyle: 'bg-status-completed text-white',
    text: str('work.status.completed'),
    emoji: '🚀'
  },
  maintained: {
    badgeStyle: 'bg-status-maintained text-white',
    text: str('work.status.maintained'),
    emoji: '🌈'
  },
  'in-development': {
    badgeStyle: 'bg-status-inDevelopment text-white',
    text: str('work.status.in_development'),
    emoji: '💪🏻'
  },
  'on-hold': {
    badgeStyle: 'bg-status-onHold text-white',
    text: str('work.status.on_hold'),
    emoji: '😴'
  },
  deprecated: {
    badgeStyle: 'bg-status-deprecated text-white',
    text: str('work.status.deprecated'),
    emoji: '😢'
  },
  abandoned: {
    badgeStyle: 'bg-status-abandoned text-white',
    text: str('work.status.abandoned'),
    emoji: '🪦'
  }
};

export interface Props extends BadgeProps {
  status: WorkStatus
}

export const WorkStatusBadge: React.FC<Props> = ({ className, status, ...props }) => {
  if (!styleMap[status]) {
    return null;
  }

  const { badgeStyle, text, emoji } = styleMap[status];

  return (
    <Badge className={clsx('inline-flex gap-[0.25rem] items-center', badgeStyle, className)} pill {...props}>
      <div>
        {emoji}
      </div>

      {text}
    </Badge>
  );
};
