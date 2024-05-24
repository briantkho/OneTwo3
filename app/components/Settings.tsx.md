## Settings Component Documentation

### Table of Contents 
*  [Introduction](#introduction)
*  [Code Overview](#code-overview)
*  [Components](#components)
*  [Functions](#functions)
*  [Usage](#usage)

### Introduction 
This component is a simple delete button designed to be used within the settings section of an application. It allows users to delete specific data items related to a particular category.

### Code Overview
This code defines a React component named "Settings" that renders a delete button using the `TiDelete` icon from the `react-icons/ti` library. The button triggers a function `handleDelete` to delete the associated data from the Supabase database.

### Components
* **`TiDelete`:** This component imports the delete icon from the `react-icons/ti` library.  
    * **Props:**
        * **className:** Applies CSS styles to the icon.
        * **onClick:**  Triggers the `handleDelete` function when clicked.
* **`Settings`:**  This component renders the delete button and handles the data deletion process.
    * **Props:**
        * **category:** A string representing the category of the data to be deleted.
        * **data:** An object containing the data to be deleted. 

### Functions
* **`handleDelete`:** This function performs the data deletion action. 
    * **Steps:**
        1. Creates a Supabase client using the `createClient` function.
        2. Calls the `delete()` function on the Supabase table corresponding to the `category` provided.
        3. Uses the `eq()` method to specify the record to delete based on its `id`.
        4. Reloads the current page using `window.location.reload()`.

### Usage
This component is intended to be used within a settings context, allowing users to delete specific data items. 

**Example:**
```jsx
<Settings category="users" data={userData} />
```
This would render a delete button that, when clicked, would delete the user data specified in `userData` from the "users" table in Supabase.
