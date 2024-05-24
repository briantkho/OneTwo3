## GoalsCard Component Documentation

### Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)

### Overview

The `GoalsCard` component renders a `Card` component specifically designed for displaying goals. It uses the `CategoryTypes.goals` category and allows for a custom header.

### Usage

To use the `GoalsCard` component, simply import it into your component and pass in the desired props.

```javascript
import GoalsCard from '@/app/components/GoalsCard';

// Render the GoalsCard with a custom header
<GoalsCard header="My Goals" />
```

### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `header` | `string` | The header text for the card. | `undefined` |

### Example

```javascript
import GoalsCard from '@/app/components/GoalsCard';

// Render the GoalsCard with a custom header
<GoalsCard header="My Goals" />
```

This will render a `Card` component with the "Goals" category, a "My Goals" header, and a filter status of 0.
