## Habits Modal Component Documentation

### Table of Contents 
- [Introduction](#introduction)
- [Component Usage](#component-usage)
- [Component Properties](#component-properties)
- [Component Functionality](#component-functionality)
- [State Management](#state-management)
- [Supabase Integration](#supabase-integration)

### Introduction 
This component, `HabitsModal`, renders a modal form for creating new habits. It uses the `Modal` component to display the form and integrates with Supabase to persist new habit data. 

### Component Usage
The `HabitsModal` component is a React component that can be rendered within any parent component. It is self-contained and does not require any external props.

### Component Properties
The `HabitsModal` component does not accept any properties.

### Component Functionality
The `HabitsModal` component handles the following functionality:
- **Rendering a modal form**: The component utilizes the `Modal` component to display a form for entering habit details.
- **Form input handling**: The component provides input fields for:
    - Habit title
    - Habit description
    - Frequency per week
    - Start date
    - End date
- **Data submission**: The component submits the entered habit data to the Supabase database.
- **State management**: The component utilizes the `useHabitModalStore` hook to manage the visibility state of the modal.

### State Management
The `HabitsModal` component utilizes the `useHabitModalStore` custom hook for managing the state of the modal:
- **`toggleModal`**: This function is called to close the modal and set its state to `false`.

### Supabase Integration
The `HabitsModal` component interacts with the Supabase database to store new habit data:
- **Authentication**: The component first retrieves the currently logged-in user using `supabase.auth.getUser()`.
- **Data insertion**: The component inserts the new habit data into the `habit` table using `supabase.from('habit').insert()`.
- **Error handling**: The component handles potential errors during data submission by displaying an alert to the user.

**Code breakdown:**

```javascript
'use client';

// Import necessary components and utilities
import Modal from '@/app/components/Modal/Modal';
import { CategoryInput } from '@/app/utils/CategoryInputs';
import { CategoryTypes } from '@/app/utils/CategoryTypes';
import { useState } from 'react';
import { useSupabase } from '@/app/components/supabase-provider';
import { useHabitModalStore } from '@/app/utils/stateManager';

// Define the HabitsModal component
export default function HabitsModal() {
  // Get the toggleModal function from the state manager
  const toggleModal = useHabitModalStore((state) => state.setModalStateFalse);

  // Get the Supabase client
  const { supabase } = useSupabase();

  // Initialize the component state with default values
  const [values, setValues] = useState({
    title: '',
    description: '',
    frequencyPerWeek: '',
    startDate: '',
    endDate: '',
  });

  // Define the onChange function to handle input changes
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Define the handleSubmit function to submit the form data
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Get the currently logged-in user
    const { data: user } = await supabase.auth.getUser();

    // Insert the new habit data into the Supabase database
    const { error } = await supabase.from('habit').insert([
      {
        user_id: user.user?.id,
        title: values.title,
        description: values.description,
        frequency_per_week: values.frequencyPerWeek,
        start_date:
          values.startDate === '' ? new Date().toISOString() : values.startDate,
        end_date: values.endDate === '' ? null : values.endDate,
      },
    ]);

    // Handle the response from Supabase
    if (!error) {
      // Reload the page if the data was successfully inserted
      window.location.reload();
    } else {
      // Display an alert if an error occurred
      window.alert('Oops, something went wrong!');
    }
  };

  // Prepare the data object for the Modal component
  const data = {
    stateValues: values,
    changeEvent: onChange,
    inputs: CategoryInput.habit,
    submit: handleSubmit,
  };

  // Return the JSX for the HabitsModal component
  return (
    <Modal
      key={CategoryTypes.habits}
      category={CategoryTypes.habits}
      data={data}
    />
  );
}
```

This code documentation provides a detailed explanation of the `HabitsModal` component, including its functionality, state management, and Supabase integration. It can be used by other developers to understand and maintain the component. 
