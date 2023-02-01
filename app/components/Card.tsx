import React from 'react';
import Cell from './Cell';

type CardType = {
  category?: string;
  data?: any;
};

export const Card = ({ category, data }: CardType) => {
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3030/goals', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  return (
    <div className="bg-white-bg shadow-lg dark:bg-dark-card dark:shadow-none w-min h-min">
      {category}
      <Cell data={data} />
    </div>
  );
};
