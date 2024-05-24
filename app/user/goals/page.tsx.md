## GoalsPage Component Documentation

**Table of Contents**

* [Overview](#overview)
* [Usage](#usage)
* [Code Breakdown](#code-breakdown)

### Overview

The `GoalsPage` component is responsible for displaying a user's goals, separated into "To Do" and "Completed" categories. It utilizes the `Card` component to display each category and uses the `CategoryTypes` and `HeaderTypes` enums to define the content and header of each card.

### Usage

The `GoalsPage` component is a simple functional component and does not require any props or state management. 

### Code Breakdown

```javascript
import { Card } from '@/app/components/Card';
import { CategoryTypes, HeaderTypes } from '@/app/utils/CategoryTypes';

export default function GoalsPage() {
  return (
    <div className="flex flex-col gap-10">
      <p className="header">My Goals</p>
      <div className="flex flex-col gap-7">
        <Card
          category={CategoryTypes.goals}
          header={HeaderTypes.todo}
          filterStatus={0}
        />
        <Card
          category={CategoryTypes.goals}
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
   * `Card`: Imports the `Card` component from the `@/app/components/Card` module.
   * `CategoryTypes`, `HeaderTypes`: Imports the enums for category and header types from the `@/app/utils/CategoryTypes` module.

2. **Functional Component:**
   * `export default function GoalsPage() { ... }`: Defines the `GoalsPage` component as a functional component.

3. **JSX Structure:**
   * `<div className="flex flex-col gap-10">`: The main container for the Goals page, with a vertical flex layout and a gap of 10 units between elements.
   * `<p className="header">My Goals</p>`: Displays the header text "My Goals".
   * `<div className="flex flex-col gap-7">`: A nested container for the "To Do" and "Completed" cards, also with a vertical flex layout and a gap of 7 units.

4. **Card Component Usage:**
   * Two `Card` components are used, each displaying a different category:
     * **"To Do" Card:**
       * `category={CategoryTypes.goals}`: Sets the category to `goals`.
       * `header={HeaderTypes.todo}`: Sets the header to "To Do".
       * `filterStatus={0}`: Filters items with a status of 0 (presumably representing "To Do").
     * **"Completed" Card:**
       * `category={CategoryTypes.goals}`: Sets the category to `goals`.
       * `header={HeaderTypes.completed}`: Sets the header to "Completed".
       * `filterStatus={2}`: Filters items with a status of 2 (presumably representing "Completed").

**Note:** The actual implementation of the `Card` component and the `CategoryTypes` and `HeaderTypes` enums are not included in the code snippet. The provided code only demonstrates how the `GoalsPage` component uses these components and enums. 
