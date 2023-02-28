const getToday = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};

export const CategoryInput = {
  goals: [
    { id: 1, name: 'title', type: 'text', placeholder: 'Goal title' },
    {
      id: 2,
      name: 'description',
      type: 'text',
      placeholder: 'Add description...',
    },
    {
      id: 3,
      name: 'targetDate',
      type: 'date',
      min: getToday(),
    },
  ],
} as const;
