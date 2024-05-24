## Profile Page Component Documentation

This document provides a comprehensive overview of the `Profile` component, which allows users to view and update their profile information.

### Table of Contents

| Section | Description |
|---|---|
| **Introduction** |  An overview of the component's purpose and functionality. |
| **Dependencies** | A list of external libraries and internal modules used by the component. |
| **Component Structure** |  A detailed breakdown of the component's structure, including its state, props, and methods. |
| **Data Fetching and Updating** | Information on how the component interacts with the Supabase database to retrieve and update user profile data. |
| **User Interface (UI)** |  An explanation of the component's visual layout and user interactions. |
| **Example Usage** |  A practical example of how the component can be used within a larger application. |

### Introduction

The `Profile` component is a React component responsible for displaying and managing user profile information. Users can view their current profile details, including their name, email address, and last updated timestamp. They can also modify their profile information by making changes to the provided input fields and submitting them for updates.

### Dependencies

The `Profile` component utilizes the following external libraries and internal modules:

| Dependency | Description |
|---|---|
| `@/app/components/Loading` | A component that displays a loading indicator. |
| `@/app/components/SignOut` | A component for handling user sign-out. |
| `react` |  The core React library. |
| `../../components/FormInput` | A reusable component for creating form input fields. |
| `../../utils/supabase-browser` |  A utility module for interacting with the Supabase database. |

### Component Structure

The `Profile` component is structured as follows:

* **State:**
    * `loading`: A boolean indicating whether the component is currently loading data.
    * `values`: An object containing user profile data, including:
        * `firstName`:  The user's first name.
        * `lastName`: The user's last name.
        * `email`: The user's email address.
        * `updatedAt`: The timestamp of the last profile update.
* **Props:** None.
* **Methods:**
    * `getProfile()`:  Fetches user profile data from the Supabase database.
    * `handleUpdate()`: Updates user profile data in the Supabase database.
    * `onChange(e)`: Handles changes to input fields.

### Data Fetching and Updating

* **Fetching Profile Data:**
    * The `getProfile()` method retrieves user profile data from the Supabase database using the `supabase.auth.getUser()` and `supabase.from('profiles').select('*').eq('id', user.user?.id).single()` methods.
    * The fetched data is stored in the `values` state.
* **Updating Profile Data:**
    * The `handleUpdate()` method modifies the `values` state to reflect user input.
    * It then updates the Supabase database using the `supabase.from('profiles').upsert()` method.
    * Upon successful update, an alert message is displayed to confirm the update.

### User Interface (UI)

The `Profile` component displays the following elements:

* **Loading Indicator:** A loading indicator is displayed while the component is fetching user profile data.
* **Profile Information:**
    * A header displaying "Your Profile".
    * Form input fields for editing the user's first name, last name, and email.
    * A section displaying the last updated timestamp of the profile.
* **Update Button:** A button that triggers the `handleUpdate()` method to update the profile information.
* **Sign Out Button:**  A button allowing the user to sign out of their account.

### Example Usage

The `Profile` component can be used within a larger application as follows:

```javascript
import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
```

This code snippet will render the `Profile` component within the `App` component, allowing users to access their profile and make updates. 
