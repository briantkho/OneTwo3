## Checkbox Component Documentation

### Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Properties](#properties)
- [Example](#example)

### Description 

This component represents a checkbox input element that interacts with a Supabase database to update the status of a record. 

### Usage

The `Checkbox` component renders a visually styled checkbox input that can be used to toggle the status of a record in a Supabase database.

### Properties

| Property | Type | Description |
|---|---|---|
| `data` | Object |  An object containing the `category` and `id` of the record to be updated. |

### Example

```javascript
import Checkbox from './Checkbox';

const data = {
  category: 'tasks', // Name of the Supabase table
  id: 1 // ID of the record in the table
};

<Checkbox data={data} />
```

### Code Breakdown

```javascript
'use client'; // This line indicates that this component is a client-side component

import { createClient } from '../utils/supabase-browser'; // Imports the Supabase client

export default function Checkbox({ data }: any) { // Defines the Checkbox component with a data prop
  const supabase = createClient(); // Creates a new instance of the Supabase client

  const handleClick = async (e: any) => { // Defines the click handler function
    if (e.target.checked) { // Checks if the checkbox is checked
      await supabase // Calls Supabase to update the record
        .from(data.category) // Specifies the table to update
        .update({ status: 2 }) // Sets the status to 2 (likely representing "completed")
        .eq('id', data.id); // Filters the update to the specific record based on its ID
    } else { // If the checkbox is unchecked
      await supabase // Calls Supabase to update the record
        .from(data.category) // Specifies the table to update
        .update({ status: 0 }) // Sets the status to 0 (likely representing "incomplete")
        .eq('id', data.id); // Filters the update to the specific record based on its ID
    }
    window.location.reload(); // Reloads the page after the update
  };

  return ( // Renders the checkbox element
    <input
      type={'checkbox'} // Sets the input type to checkbox
      onClick={handleClick} // Attaches the click handler to the checkbox
      className="appearance-none border-solid border-black dark:border-white-bg border-2 h-5 
      rounded-md aspect-square opacity-60 checked:bg-[#cc2b5e] checked:border-none" // Styles the checkbox element
    />
  );
}
```

**Explanation:**

- The code uses Next.js's `'use client'` directive to indicate that the component is client-side.
- The `createClient` function is imported from a `supabase-browser` utility file to create a Supabase client instance.
- The `handleClick` function handles the click event of the checkbox. It updates the status of the corresponding record in the database based on the checked state of the checkbox.
- The status is updated to `2` if the checkbox is checked, indicating a "completed" status.
- The status is updated to `0` if the checkbox is unchecked, indicating an "incomplete" status.
- The `window.location.reload()` function is called after the update to refresh the page and reflect the changes.
- The `className` attribute provides CSS classes to style the checkbox element. 
