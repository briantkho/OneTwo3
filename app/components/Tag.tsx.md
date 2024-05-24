## Tag Component Documentation 

**Table of Contents**

* [Introduction](#introduction)
* [Component Usage](#component-usage)
* [Props](#props)
* [Code Walkthrough](#code-walkthrough)
* [Example Usage](#example-usage)

### Introduction 

This document provides a detailed walkthrough of the `Tag` component, a reusable UI element designed to display various types of tags based on provided data. 

### Component Usage 

The `Tag` component dynamically renders a tag based on the `category` and `data` props passed to it. It uses conditional logic to determine the appropriate tag styling and display text. 

### Props

| Prop Name | Type | Description | Example | 
|---|---|---|---|
| `category` | `string` | Specifies the category of the tag.  Possible values include:  `'status'`, `'timeRemaining'`, `'frequency'`, `'priority'`. | `'status'` |
| `data` | `any` |  The data associated with the tag. The data type and interpretation vary depending on the `category`. | `0`, `'1 time a week'`, `2` |

### Code Walkthrough 

```javascript
// Define the TagType interface
type TagType = {
  category: string;
  data: any;
};

// Export the Tag component as default
export default function Tag({ category, data }: TagType) {
  // Define the tagSelector function, which dynamically generates the tag content
  const tagSelector = () => {
    // Handle tags based on the 'status' category
    if (category === 'status') {
      if (data === 0) {
        return <div className="tag bg-warning-500">In Progress</div>;
      } else if (data === 2) {
        return <div className="tag bg-secondary-500">Complete</div>;
      }
    }

    // Handle tags based on the 'timeRemaining' category
    if (category === 'timeRemaining') {
      // Define a variable to store the time display
      let time = data;
      if (data <= 0) {
        return <div className="tag bg-danger-600">Overdue</div>;
      } else if (data > 30 && data < 62) {
        // Adjust time display for months
        time = 1;
        return <div className="tag bg-primary-500">{time} month left</div>;
      } else if (data > 182) {
        // Adjust time display for months
        time = 6;
        return (
          <div className="tag bg-primary-500">Over {time} months left</div>
        );
      } else {
        // Display time in days
        return <div className="tag bg-primary-500">{time} day(s) left</div>;
      }
    }

    // Handle tags based on the 'frequency' category
    if (category === 'frequency') {
      return <div className="tag bg-primary-500">{data} times a week</div>;
    }

    // Handle tags based on the 'priority' category
    if (category === 'priority') {
      // Define a variable to store the output string
      let outputString = '';

      if (data === 0) {
        outputString = 'LOW';
        return <div className="tag bg-primary-500">{outputString}</div>;
      } else if (data === 1) {
        outputString = 'MEDIUM';
        return <div className="tag bg-warning-500">{outputString}</div>;
      } else if (data >= 2) {
        outputString = 'HIGH';
        return <div className="tag bg-danger-600">{outputString}</div>;
      }
    }
  };

  // Return the dynamically generated tag element
  return <div>{tagSelector()}</div>;
}
```

### Example Usage 

```javascript
// Example usage of the Tag component:

<Tag category="status" data={0} /> // Renders a "In Progress" tag
<Tag category="timeRemaining" data={35} /> // Renders a "1 month left" tag
<Tag category="frequency" data="3" /> // Renders a "3 times a week" tag
<Tag category="priority" data={2} /> // Renders a "HIGH" tag
``` 
