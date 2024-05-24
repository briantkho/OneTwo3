## Internal Code Documentation: Category and Header Types

### Table of Contents 

* [Category Types](#category-types)
* [Header Types](#header-types)

### Category Types 

This section defines the different categories of items that can be managed by the application.

```typescript
export const CategoryTypes = {
  goals: 'Goals',
  habits: 'Habits',
  journals: 'Journals',
  reminders: 'Reminders',
  tasks: 'Tasks',
} as const;
```

| Category | Value | Description |
|---|---|---|
| `goals` | `Goals` |  Represents items that are long-term objectives. 🎯 |
| `habits` | `Habits` | Represents recurring actions or behaviors that are being developed. 🔁 |
| `journals` | `Journals` | Represents entries for personal reflections or notes. 📓 |
| `reminders` | `Reminders` | Represents notifications or alerts for specific events or tasks. 🔔 |
| `tasks` | `Tasks` | Represents individual actions or to-dos. 📝 |

The `as const` assertion ensures that the keys and values of the `CategoryTypes` object are treated as constants, preventing accidental modifications.

### Header Types

This section defines the different header types that can be used for displaying lists of items.

```typescript
export const HeaderTypes = {
  todo: 'To Do',
  completed: 'Completed',
} as const;
```

| Header Type | Value | Description |
|---|---|---|
| `todo` | `To Do` | Represents items that are pending or not yet completed. ⏳ |
| `completed` | `Completed` | Represents items that have been finished or marked as done. ✅ | 

Similar to `CategoryTypes`, the `as const` assertion ensures the keys and values are treated as constants. 
