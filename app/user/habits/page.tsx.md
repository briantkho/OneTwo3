## HabitsPage Component Documentation 

**Table of Contents**

* [Overview](#overview)
* [Component Structure](#component-structure)
* [Imports](#imports)
* [Code Breakdown](#code-breakdown)

---

### Overview 

The `HabitsPage` component displays a user's habits, separated into "To Do" and "Completed" categories. It leverages the `Card` component to display these categories in a visually appealing and organized manner.

### Component Structure

The `HabitsPage` component is a functional component that returns a JSX structure containing:

* A header with the text "My Habits".
* Two instances of the `Card` component, each representing a different category:
    * **"To Do"**: Displays habits that are yet to be completed.
    * **"Completed"**: Displays habits that have been marked as completed.

### Imports

The `HabitsPage` component imports the following modules:

| Module | Description |
|---|---|
| `Card` | A reusable component used to display habit categories. |
| `CategoryTypes` | An enum that defines different categories for habit tracking. |
| `HeaderTypes` | An enum that defines different header types for the `Card` component. |

### Code Breakdown 

```javascript
import { Card } from '@/app/components/Card';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';

export default function HabitsPage() {
  return (
    <div className="flex flex-col gap-10">
      <p className="header">My Habits</p>
      <div className="flex flex-col gap-7">
        <Card
          category={CategoryTypes.habits} 
          header={HeaderTypes.todo} 
          filterStatus={0} 
        />
        <Card
          category={CategoryTypes.habits} 
          header={HeaderTypes.completed} 
          filterStatus={2} 
        />
      </div>
    </div>
  );
}
```

**Explanation:**

1. **Import Statements:**
   -  Import the `Card` component from the `@/app/components/Card` directory.
   -  Import the `CategoryTypes` and `HeaderTypes` enums from the `@/app/utils/CategoryTypes` directory.

2. **Functional Component:**
   -  Define a functional component named `HabitsPage`.

3. **JSX Structure:**
   -  Create a `div` element with `flex` classes to arrange the content in a column layout with a gap of 10 units.
   -  Add a `p` element with the class "header" to display the "My Habits" title.
   -  Create another `div` element with `flex` classes to arrange the `Card` components vertically with a gap of 7 units.

4. **Card Components:**
   -  Two `Card` components are used to display the "To Do" and "Completed" categories of habits.
   -  **Props:**
     -  `category`: Set to `CategoryTypes.habits` to indicate that the `Card` component is displaying habits.
     -  `header`: Sets the header type for the card, using `HeaderTypes.todo` for "To Do" and `HeaderTypes.completed` for "Completed".
     -  `filterStatus`: Set to `0` for "To Do" and `2` for "Completed" to filter the habits displayed in each card.

**Overall:**

The `HabitsPage` component provides a simple and effective way to display a user's habits, categorized into "To Do" and "Completed" sections. The use of enums and the `Card` component promotes code reusability and organization. 
