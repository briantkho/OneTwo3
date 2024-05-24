## HabitsCard Component Documentation

### Table of Contents

* [Overview](#overview)
* [Usage](#usage)
* [Properties](#properties)

### Overview 

The `HabitsCard` component is a React component that renders a `Card` component specifically for displaying habits data. It utilizes the `CategoryTypes` enum to identify the card as related to habits and sets the `filterStatus` property to `0` for initial display purposes. 

### Usage

The `HabitsCard` component is imported and used in the following way:

```javascript
import HabitsCard from '@/app/components/HabitsCard';

// ...

<HabitsCard />

// ...
```

### Properties

| Property | Type | Description |
|---|---|---|
| `category` | `CategoryTypes` | Specifies the category of the card, which is set to `CategoryTypes.habits` for this component. 🍎 |
| `filterStatus` | `number` | Controls the filtering status of the card. For the `HabitsCard` component, it is set to `0`. 🔍 | 
