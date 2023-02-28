import React from 'react';

export type FormProps = {
  label: string;
  input: string;
};

export const FormInput = (props: any) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div>
      <label
      // className="dark:text-dark-textHigh font-thin"
      >
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        // className="bg-gray-200 dark:bg-dark-cell w-auto px-2 py-1 rounded-md focus:outline-none dark:text-dark-textHigh font-thin"
        required
      />
    </div>
  );
};
