## Item Modal Component Documentation 

**Table of Contents** 

- [Description](#description)
- [Props](#props)
- [State](#state)
- [Functions](#functions)
- [Usage](#usage)

### Description 

The `ItemModal` component is a React component used to display and update item details in a modal window. It is responsible for fetching item data from the Supabase database, allowing users to edit the item information, and updating the database with the changes. 

### Props 

The `ItemModal` component accepts the following props: 

| Prop Name | Type | Description |
|---|---|---|
| `data` | Object | An object containing the item data. | 

### State

The `ItemModal` component uses the following state variables:

| State Variable | Type | Description |
|---|---|---|
| `values` | Object | Stores the current values of the item data being edited. |

### Functions

The `ItemModal` component defines the following functions:

| Function Name | Description |
|---|---|
| `onChange` |  Handles changes to input fields and updates the `values` state. |
| `handleSubmit` |  Handles form submission, updates the item data in the Supabase database, and closes the modal. |

### Usage

The `ItemModal` component is used to display and edit item details within an application. It is typically called within a parent component that manages the modal state. 

```javascript
// Example usage in a parent component
import ItemModal from './ItemModal';

const MyComponent = () => {
  const { showModal, itemData } = useMyState();

  if (showModal) {
    return (
      <ItemModal data={itemData} />
    );
  }

  return (
    // ...
  );
}
```

**Code Breakdown**

```javascript
'use client'; // Indicates a client-side component

import { dayCountdown } from '@/app/utils/dateHandler'; // Import a function to calculate the remaining time 
import { useEditModalStore } from '@/app/utils/stateManager'; // Import a function to manage the modal state
import { createClient } from '@/app/utils/supabase-browser'; // Import a function to connect to Supabase database
import { useState } from 'react'; // Import the useState hook from React
import Tag from '../Tag'; // Import the Tag component 

type ItemModalType = { // Define the type for the data prop
  data: any;
};

export default function ItemModal({ data }: ItemModalType) {
  const { setModalStateFalse } = useEditModalStore(); // Get a function to close the modal
  const { title, description, status, start_date, end_date, ...otherData } = data; // Destructure the data prop

  const [values, setValues] = useState({ // Initialize the state with the current values of the item data
    title: title,
    description: description,
    start_date: start_date,
    end_date: end_date,
    ...otherData,
  });

  const onChange = (e: any) => { // Handle changes to input fields
    setValues({ ...values, [e.target.name]: e.target.value }); // Update the values state with the new values
  };

  const handleSubmit = async (e: any) => { // Handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    const supabase = createClient(); // Connect to the Supabase database

    const { error } = await supabase.from(data.category).upsert({ // Update the item data in the Supabase database
      ...values,
    });

    if (error) { // Handle any errors
      window.alert('Oops, something went wrong!'); 
    }
  };

  const category = data.category.charAt(0).toUpperCase() + data.category.slice(1); // Capitalize the first letter of the category

  return (
    <div className="flex w-screen h-screen fixed top-0 left-0 m-auto backdrop-blur-sm z-50 justify-center items-center"> // Create a modal container
      <div className="bg-white-bg w-11/12 h-5/6 p-11 rounded-xl dark:glass-bg shadow-lg"> // Create a modal content
        <form
          className="w-full h-full flex flex-col justify-between items-start"
          onSubmit={handleSubmit} // Handle form submission
        >
          <section className="w-full h-full overflow-clip flex flex-col gap-5"> // Create a section for item details
            <div>
              <p className="text-3xl font-bold">
                <input 
                  type={'text'} 
                  name="title" 
                  value={values.title} 
                  onChange={onChange} 
                  className="focus:outline-none"
                  style={{ background: 'none' }} // Customize input styles
                />
              </p>
              <p>Category: {category}</p> // Display the category of the item
              {data.start_date ? ( // Display the start date if available
                <div className="flex gap-3">
                  <p>Start Date: </p>
                  <input
                    name="startDate"
                    type={'date'}
                    value={values.startDate}
                    onChange={onChange}
                    className="focus:outline-none"
                    style={{ background: 'none' }} // Customize input styles
                  />
                </div>
              ) : null}
              {data.end_date ? ( // Display the target date if available
                <div className="flex gap-1">
                  <p>Target Date: </p>
                  <input
                    name="end_date"
                    type={'date'}
                    value={values.end_date}
                    onChange={onChange}
                    className="focus:outline-none"
                    style={{ background: 'none' }} // Customize input styles
                  />
                </div>
              ) : null}
              <div className="bg-black dark:bg-white-bg w-full h-[1px] opacity-20"></div> // Display a divider
            </div>

            {data.description ? ( // Display the description if available
              <textarea
                name="description"
                value={values.description}
                onChange={onChange}
                className="w-full focus:outline-none resize-none h-full"
                style={{ background: 'none' }} // Customize textarea styles
              />
            ) : null}
          </section>
          <section className="flex justify-between w-full h-min items-center"> // Create a section for tags and update button
            <div className="flex gap-3">
              <Tag category="status" data={data.status} /> // Display a status tag
              {data.end_date && data.status != 2 ? ( // Display a time remaining tag if end date is available and status is not completed
                <Tag
                  category="timeRemaining"
                  data={dayCountdown(data.end_date)}
                />
              ) : null}
              {data.frequency_per_week ? ( // Display a frequency tag if available
                <Tag category="frequency" data={data.frequency_per_week} />
              ) : null}
              {data.priority ? ( // Display a priority tag if available
                <Tag category="priority" data={data.priority} />
              ) : null}
            </div>
            {data.status === 2 ? null : ( // Display an update button if the item is not completed
              <button className="gradient-btn">Update {category}</button>
            )}
          </section>
        </form>
      </div>
      <div
        className="bg-black w-screen h-screen absolute -z-10 dark:opacity-95 opacity-25"
        onClick={setModalStateFalse} // Close the modal on click
      ></div>
    </div>
  );
}
```