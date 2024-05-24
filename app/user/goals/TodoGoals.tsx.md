## Completed Goals Component Documentation

### Table of Contents

- [Overview](#overview)
- [Component Structure](#component-structure)
- [Usage](#usage)
- [Props](#props)

### Overview 

This component displays a list of completed goals. 

### Component Structure

The `CompletedGoals` component is built using the following structure:

- **Card Component:**  The `CompletedGoals` component utilizes the `Card` component from `@/app/components/Card` to provide a visually appealing container for the goals data. 
- **Category & Header Types:**  The component imports `CategoryTypes` and `HeaderTypes` enums from `@/app/utils/CategoryTypes` to define the category and header type for the `Card` component. 

### Usage

To use the `CompletedGoals` component, simply import it into your desired component and render it.

```javascript
import CompletedGoals from '@/app/components/CompletedGoals';

// ... your component code

<CompletedGoals />
```

### Props

The `CompletedGoals` component accepts the following props:

| Prop Name | Type | Default | Description |
|---|---|---|---|
| `category` | `CategoryTypes` | `CategoryTypes.goals` | Specifies the category of the goals displayed. |
| `header` | `HeaderTypes` | `HeaderTypes.todo` | Specifies the header type for the `Card` component. |
| `filterStatus` | `number` | `0` |  Filters the goals based on their completion status. A value of `0` indicates that only completed goals should be displayed. |

**Example:**

```javascript
<CompletedGoals category={CategoryTypes.goals} header={HeaderTypes.todo} filterStatus={0} />
```

This will render a `Card` component displaying a list of completed goals with the header "Todo" and the category set to "Goals". 
