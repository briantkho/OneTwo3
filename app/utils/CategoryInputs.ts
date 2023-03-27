const getToday = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};

const labelNames = {
  title: 'Title',
  description: 'Description',
  frequencyPerWeek: 'Frequency Per Week',
  startDate: 'Start Date',
  endDate: 'End Date',
  status: 'Status',
  priority: 'Priority',
  date: 'Date',
} as const;

const priorityDictionary = {
  0: 'Backlog',
  1: 'Medium',
  2: 'Urgent',
};

export const CategoryInput = {
  goal: [
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
      name: 'end_date',
      type: 'date',
      min: getToday(),
      label: labelNames.endDate,
    },
  ],

  habit: [
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
      name: 'frequencyPerWeek',
      type: 'number',
      min: 1,
      label: labelNames.frequencyPerWeek,
    },
    {
      id: 4,
      name: 'start_date',
      type: 'date',
      label: labelNames.startDate,
    },
    {
      id: 5,
      name: 'end_date',
      type: 'date',
      label: labelNames.endDate,
    },
  ],
  task: [
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
      name: 'priority',
      type: 'number',
      min: 0,
      max: 2,
      label: labelNames.priority,
    },
    {
      id: 4,
      name: 'end_date',
      type: 'date',
      label: labelNames.endDate,
    },
  ],
  journal: [
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
      placeholder:
        'Add your thoughts, ideas, or anything you may want to get off of your chest...',
      label: labelNames.description,
    },
    {
      id: 3,
      name: 'date',
      type: 'date',
      min: getToday(),
      label: labelNames.date,
    },
  ],
};
