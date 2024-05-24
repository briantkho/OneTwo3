## Category Input Documentation 

### Table of Contents

| Section | Description |
|---|---|
| [**Introduction**](#introduction) | Overview of the Category Input object and its purpose. |
| [**Functions**](#functions) | Description of the helper functions used within the Category Input object. |
| [**Constants**](#constants) | Explanation of the constant variables used within the Category Input object. |
| [**Category Input Object Structure**](#category-input-object-structure) | Detailed explanation of the Category Input object and its properties. |

### Introduction 

The `CategoryInput` object defines the structure for input fields used in different categories of tasks or entries within an application. This object is designed to provide a standardized way to manage and display input forms for various categories, ensuring consistency and maintainability.

### Functions

#### `getToday()`

This function returns the current date in the format "YYYY-MM-DD". It uses the `toISOString()` method to get the current date and time in ISO 8601 format, then extracts the date portion using `split('T')[0]`.

```javascript
const getToday = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  return currentDate;
};
```

### Constants

#### `labelNames`

This constant object stores the display labels for different input fields. This approach promotes code clarity and simplifies maintenance by centralizing label definitions. 

```javascript
const labelNames = {
  title: 'Title',
  description: 'Description',
  frequencyPerWeek: 'Frequency Per Week',
  startDate: 'Start Date',
  endDate: 'End Date',
  status: 'Status',
  priority: 'Priority',
  date: 'Date',
} as const;
```

#### `priorityDictionary`

This constant object maps priority levels to their corresponding textual representations. This ensures consistent display of priority levels across the application.

```javascript
const priorityDictionary = {
  0: 'Backlog',
  1: 'Medium',
  2: 'Urgent',
};
```

### Category Input Object Structure

The `CategoryInput` object is a structured collection of input field definitions, organized by category. Each category contains an array of input field objects with the following properties:

* **`id`**: A unique identifier for the input field. 
* **`name`**: The name of the input field. This name is used to access the field value from the form data. 
* **`type`**: The type of input field (e.g., `text`, `date`, `number`).
* **`placeholder`**: A placeholder text to guide the user in filling out the input field.
* **`label`**: The display label for the input field, retrieved from the `labelNames` constant.
* **`min`**: (Optional) The minimum allowed value for the input field (applies to `date` and `number` types).
* **`max`**: (Optional) The maximum allowed value for the input field (applies to `number` types).

**Example:**

Here's an example of the input field definitions for the `goal` category:

```javascript
goal: [
    {
      id: 1,
      name: 'title',
      type: 'text',
      placeholder: 'Add title...',
      label: labelNames.title,
    },
    {
      id: 2,
      name: 'description',
      type: 'text',
      placeholder: 'Add description...',
      label: labelNames.description,
    },
    {
      id: 3,
      name: 'end_date',
      type: 'date',
      min: getToday(),
      label: labelNames.endDate,
    },
  ],
```

**Categories:**

* **`goal`:** Defines input fields for goals, including title, description, and end date.
* **`habit`:** Defines input fields for habits, including title, description, frequency per week, start date, and end date.
* **`task`:** Defines input fields for tasks, including title, description, priority, and end date.
* **`journal`:** Defines input fields for journal entries, including title, description, and date.

**Note:**

The `CategoryInput` object provides a structured and standardized way to define input fields for different categories within an application. This approach ensures consistency, maintainability, and ease of development.