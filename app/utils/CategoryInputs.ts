const getToday = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};

const labelNames = {
  title: 'Title',
  description: 'Description',
  targetDate: 'Achievement Date',
  frequencyPerWeek: 'Frequency Per Week',
  startDate: 'Start Date',
  endDate: 'End Date',
} as const;

export const CategoryInput = {
  goals: [
    {
      id: 1,
      name: 'title',
      type: 'text',
      placeholder: 'Add title...',
      label: labelNames.title,
    },
    {
      id: 2,
      name: 'description',
      type: 'text',
      placeholder: 'Add description...',
      label: labelNames.description,
    },
    {
      id: 3,
      name: 'targetDate',
      type: 'date',
      min: getToday(),
      label: labelNames.targetDate,
    },
  ],

  habits: [
    {
      id: 1,
      name: 'title',
      type: 'text',
      placeholder: 'Habit title',
      label: labelNames.title,
    },
    {
      id: 2,
      name: 'description',
      type: 'text',
      placeholder: 'Add description...',
      label: labelNames.description,
    },
    {
      id: 3,
      name: 'frequencyPerWeek',
      type: 'number',
      min: 1,
      label: labelNames.frequencyPerWeek,
    },
    {
      id: 4,
      name: 'startDate',
      type: 'date',
      label: labelNames.startDate,
    },
    {
      id: 5,
      name: 'endDate',
      type: 'date',
      label: labelNames.endDate,
    },
  ],
} as const;
