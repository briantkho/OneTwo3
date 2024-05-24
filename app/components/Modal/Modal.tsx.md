## Modal Component Documentation 

### Table of Contents

- [Introduction](#introduction)
- [Component Usage](#component-usage)
- [Props](#props)
- [State Management](#state-management)
- [Code Structure](#code-structure)
- [Styling](#styling)

### Introduction 

This component renders a modal dialog for adding new goals, habits, and tasks. It uses a centralized state management system for managing the modal state and form data.

### Component Usage

The Modal component is designed to be used within a React application. It receives props to determine the type of modal to display (goals, habits, or tasks) and the associated data.

### Props

| Prop Name | Type | Description |
|---|---|---|
| category | string | The category of the modal (e.g., "goals", "habits", "tasks"). |
| data | object | An object containing the following properties: <br> - stateValues: An object containing the current state values of the form fields. <br> - changeEvent: A function that handles changes to the form fields. <br> - inputs: An array of input objects for the form. <br> - submit: A function that handles the form submission. |

### State Management

The modal uses a separate state management system for each category (goals, habits, tasks) to control the modal visibility and form data. The following stores are used:

- `useGoalModalStore`: For managing the goal modal state.
- `useHabitModalStore`: For managing the habit modal state.
- `useTaskModalStore`: For managing the task modal state.

Each store exposes functions for toggling the modal state and updating form data.

### Code Structure

```javascript
'use client';

import {
  useGoalModalStore,
  useHabitModalStore,
  useTaskModalStore,
} from '@/app/utils/stateManager';
import { FormInput } from '../FormInput';
import { VscChromeClose } from 'react-icons/vsc';
import { CategoryTypes } from '@/app/utils/CategoryTypes';

type ModalType = {
  category: string;
  data: any;
};

export default function Modal({ category, data }: ModalType) {
  const { stateValues, changeEvent, inputs, submit } = data;

  let newCategory = category;

  const toggleGoalState = useGoalModalStore(
    (state) => state.setModalStateFalse
  );
  const toggleHabitState = useHabitModalStore(
    (state) => state.setModalStateFalse
  );
  const toggleTaskState = useTaskModalStore(
    (state) => state.setModalStateFalse
  );

  const toggleModal = () => {
    if (category === CategoryTypes.goals) toggleGoalState();
    else if (category === CategoryTypes.habits) toggleHabitState();
    else if (category === CategoryTypes.tasks) toggleTaskState();
  };

  if (category) {
    if (newCategory.slice(-1) === 's') {
      newCategory = category.substring(0, category.length - 1);
    }
  }

  return (
    <div className="flex w-screen h-screen fixed justify-center items-center top-0 left-0 m-auto backdrop-blur-sm z-50">
      <div className="dark:glass-bg bg-white-bg flex flex-col w-2/3 p-10 rounded-3xl shadow-lg gap-5">
        <div className="flex justify-between items-center">
          <p className="whitespace-nowrap font-bold text-2xl">
            Add {newCategory}
          </p>
          <VscChromeClose className="cursor-pointer" onClick={toggleModal} />
        </div>
        <form onSubmit={submit} className="flex flex-col gap-5">
          {inputs.map((input: any) => (
            <>
              <FormInput
                key={input.id}
                value={stateValues[input.name]}
                {...input}
                onChange={changeEvent}
              />
              <div className="bg-black dark:bg-white-bg w-full h-[1px] opacity-20"></div>
            </>
          ))}
          <button className="gradient-btn" type="submit">
            Create {newCategory}
          </button>
        </form>
      </div>
      <div
        className="bg-black w-screen h-screen absolute -z-10 dark:opacity-95 opacity-25"
        onClick={toggleModal}
      ></div>
    </div>
  );
}
```

### Styling

The Modal component uses a combination of Tailwind CSS classes and custom styles to achieve its visual appearance. 

- **Dark Mode Support:** The component leverages Tailwind's dark mode utilities (`dark:glass-bg`, `dark:bg-white-bg`) to ensure proper styling in both light and dark mode.
- **Visual Hierarchy:**  The use of bold font weight (`font-bold`) and larger text size (`text-2xl`) for the modal title helps establish visual hierarchy within the modal.
- **Gradient Button:** The `gradient-btn` class applies a gradient background to the "Create" button, adding visual interest and highlighting the button's action.
- **Overlay:** The overlay behind the modal (`bg-black w-screen h-screen absolute -z-10 dark:opacity-95 opacity-25`) provides a semi-transparent background, visually separating the modal from the rest of the application.

This code provides a clean and well-structured approach to handling modal interactions and data management within a React application. The use of a centralized state management system ensures consistency across different components, while the styling choices create a visually appealing and user-friendly experience.