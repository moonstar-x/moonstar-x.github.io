export const WORK_TYPE_TYPES = ['art', 'hobby', 'research'] as const;
export type WorkType = typeof WORK_TYPE_TYPES[number];

const WORK_TYPE_LABELS: Record<WorkType, string> = {
  art: 'Art',
  hobby: 'Hobby',
  research: 'Research'
};

export const getWorkTypeLabel = (type: WorkType): string => WORK_TYPE_LABELS[type];
