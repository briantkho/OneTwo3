## Toggle Modal Component Documentation 

**Table of Contents**

* [Introduction](#introduction)
* [Usage](#usage)
* [Props](#props)
* [Code Overview](#code-overview)

### Introduction 
This component is responsible for rendering a button that, when clicked, opens a modal specific to the category passed in as a prop.  The component utilizes the `useGoalModalStore`, `useHabitModalStore`, and `useTaskModalStore` hooks to manage the modal states for goals, habits, and tasks respectively.

### Usage
To use the `ToggleModal` component, simply import it and pass the desired category as a prop. For example:

```javascript
import ToggleModal from './ToggleModal';

<ToggleModal category={CategoryTypes.goals} />
```

### Props

| Prop Name | Type | Description |
|---|---|---|
| `category` | string | The category of the modal to open. Possible values: `CategoryTypes.goals`, `CategoryTypes.habits`, `CategoryTypes.tasks`. |

### Code Overview

```javascript
// Import statements
'use client';

import { CategoryTypes } from '@/app/utils/CategoryTypes';
import {
  useGoalModalStore,
  useHabitModalStore,
  useTaskModalStore,
} from '@/app/utils/stateManager';

import { IoAddSharp } from 'react-icons/io5';

// Define type for the component props
type ToggleComponentProps = {
  category: string;
};

// Define the ToggleModal component
export default function ToggleModal({ category }: ToggleComponentProps) {
  // Use the state management hooks to get the functions for setting the modal states
  const toggleGoalState = useGoalModalStore((state) => state.setModalStateTrue);
  const toggleHabitState = useHabitModalStore(
    (state) => state.setModalStateTrue
  );
  const toggleTaskState = useTaskModalStore((state) => state.setModalStateTrue);

  // Define the handleToggle function to manage the modal opening based on the category prop
  const handleToggle = () => {
    if (category === CategoryTypes.goals) toggleGoalState();
    else if (category === CategoryTypes.habits) toggleHabitState();
    else if (category === CategoryTypes.tasks) toggleTaskState();
  };

  // Render the component
  return (
    <button className="text-xl" onClick={handleToggle}>
      <IoAddSharp />
    </button>
  );
}
```

**Explanation of Code:**

* **Imports:** The component imports necessary libraries and functions, including the `CategoryTypes` enum and the state management hooks.
* **Props:** The component defines the type of its props with the `ToggleComponentProps` interface.
* **State Management:** It utilizes state management hooks (`useGoalModalStore`, `useHabitModalStore`, `useTaskModalStore`) to access and modify the modal state.
* **`handleToggle` Function:** This function takes the `category` prop and sets the appropriate modal state to `true` using the corresponding hook.
* **Rendering:** The component renders a button with an `IoAddSharp` icon, which calls the `handleToggle` function when clicked. 

**This component provides a simple yet effective way to toggle different modals based on the desired category, promoting code reusability and a cleaner user interface.** 
