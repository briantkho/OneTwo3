## JournalCard Component Documentation 

### Table of Contents

| Section | Description |
|---|---|
| **1. Overview** |  |
| **2. Component Structure** |  |
| **3. Usage** |  |
| **4. Dependencies** |  |
| **5. Functionality** |  |
| **6. Data Fetching** |  |
| **7. Real-time Updates** |  |
| **8. Styling** |  |
| **9. Error Handling** |  |

### 1. Overview

The `JournalCard` component renders a list of journal entries fetched from a Supabase database. It provides a user-friendly interface to view, edit, and delete journal entries. 

### 2. Component Structure

The `JournalCard` component is structured as follows:

- **Import Statements:** Imports necessary modules, including:
    - `Loading` component for displaying a loading state.
    - `Settings` component for displaying settings related to journal entries.
    - `CategoryTypes` for specifying the category of the journal entries.
    - `useEditModalStore` for managing the state of the edit modal.
    - `createClient` to create a Supabase client for database interactions.
    - `useEffect` and `useState` for managing component state and side effects.
- **Supabase Initialization:** Initializes a Supabase client.
- **State Variables:**
    - `loading`: Tracks loading state.
    - `data`: Stores the array of journal entries retrieved from the database.
- **useEffect Hook:**
    - Fetches journal entries from the Supabase database using `getData` function.
    - Sets up a Supabase real-time subscription to listen for changes in the `journal` table and update the data accordingly.
    - Unsubscribes from the real-time subscription when the component unmounts.
- **handleClick Function:** Updates the state of the edit modal with the selected journal entry data.
- **JSX Rendering:**
    - Renders a loading indicator if `loading` is true.
    - Renders a grid of journal entries, each with:
        - Title, description, and date.
        - A settings button for editing or deleting the entry.

### 3. Usage

The `JournalCard` component can be used to display a list of journal entries in any React application that integrates with Supabase. 

### 4. Dependencies

The `JournalCard` component depends on the following libraries:

- React
- Supabase 
- `@/app/components/Loading`:  Component for showing loading state.
- `@/app/components/Settings`:  Component for handling settings related to journal entries.
- `@/app/utils/CategoryTypes`: Defines the category type for the journal entries.
- `@/app/utils/stateManager`: Provides a state management system for the edit modal.
- `@/app/utils/supabase-browser`: Provides a browser-side Supabase client.

### 5. Functionality

The `JournalCard` component provides the following core functionality:

- **Fetching data:** Retrieves journal entries from the `journal` table in the Supabase database.
- **Displaying data:** Renders each journal entry in a visually appealing format.
- **Real-time updates:** Updates the displayed journal entries in real-time when changes occur in the database.
- **Editing and deleting:** Provides a user interface for editing and deleting individual journal entries through the `Settings` component and edit modal.

### 6. Data Fetching

The `getData` function fetches journal entries from the `journal` table in the Supabase database using the following steps:

1. **Authenticates the user:** Retrieves the currently logged-in user's data from Supabase.
2. **Fetches data:** Queries the `journal` table, selecting all columns (`*`) and ordering the results in descending order of `date`. Filters entries by the user's `id`.
3. **Handles errors:** Displays an alert message if an error occurs during the fetching process.
4. **Updates state:** Updates the `data` state variable with the retrieved journal entries and sets `loading` to false.

### 7. Real-time Updates

The component uses a Supabase real-time subscription to listen for changes in the `journal` table. The `subscription` object is configured to listen for all types of events (`*`) on the `journal` table.

When a change occurs, the `payload` object is received with the following information:

- **eventType:** The type of event that occurred (e.g., `INSERT`, `UPDATE`, `DELETE`).
- **new:** The new data for the entry (for `INSERT` and `UPDATE`).
- **old:** The old data for the entry (for `DELETE`).

The `switch` statement updates the `data` state variable accordingly based on the `eventType`.

### 8. Styling

The `JournalCard` component uses Tailwind CSS for styling. The following classes are used:

- **`glass-bg`**: Applies a frosted glass effect to the journal entry containers.
- **`rounded-lg`**: Adds rounded corners.
- **`flex justify-between`**: Aligns the title and settings button horizontally.
- **`w-full`**: Makes the journal entry container occupy the full width.
- **`max-h-[50vh]`**: Sets the maximum height to 50% of the viewport height.
- **`font-bold text-xl cursor-pointer`**: Styles the title to be bold, large, and clickable.
- **`w-min whitespace-nowrap`**: Prevents the title from wrapping to the next line.
- **`overflow-y-scroll`**: Allows vertical scrolling for long descriptions.
- **`text-xs opacity-50`**: Styles the date to be small and semi-transparent.

### 9. Error Handling

The component handles errors during data fetching by displaying an alert message to the user. This provides a basic error notification, but more robust error handling could be implemented, such as displaying a specific error message or providing retry functionality. 
