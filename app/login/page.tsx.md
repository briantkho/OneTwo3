## LoginPage Component Documentation

**Table of Contents**

* [Overview](#overview)
* [Dependencies](#dependencies)
* [State](#state)
* [Inputs](#inputs)
* [Functions](#functions)
    * [onChange](#onchange)
    * [handleSubmit](#handsubmit)
* [Component Structure](#component-structure)

### Overview 

The `LoginPage` component handles user authentication using Supabase's `signInWithPassword` method. It displays a login form with email and password fields and allows users to submit their credentials for authentication. 

### Dependencies

The component utilizes the following dependencies:

* **`react`**: Provides core React functionalities.
* **`FormInput`**: A custom component for creating input fields.
* **`Navbar`**: A custom component for navigation.
* **`supabase-browser`**: Client library for interacting with Supabase.

### State

The component manages the following state using the `useState` hook:

| State Variable | Type | Description |
|---|---|---|
| `values` | Object | Stores the user-entered email and password values. |

### Inputs

The component uses an array of input objects to define the login form fields:

| Property | Type | Description |
|---|---|---|
| `id` | Number | Unique identifier for the input field. |
| `name` | String | Name of the input field, used for state management. |
| `type` | String | Type of input field, e.g., "email", "password". |
| `placeholder` | String | Placeholder text for the input field. |
| `label` | String | Label displayed above the input field. |

### Functions

#### onChange

This function handles changes to the input fields. It updates the `values` state with the new input value.

```javascript
const onChange = (e: any) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
```

#### handleSubmit

This function handles the form submission. It performs the following steps:

1. Prevents the default form submission behavior.
2. Calls `supabase.auth.signInWithPassword` to authenticate the user using the provided email and password.

```javascript
const handleSubmit = async (e: any) => {
  e.preventDefault();

  await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });
};
```

### Component Structure

The component renders the following elements:

1. **Navbar**: Displays the navigation bar.
2. **Login Form**: Contains the following elements:
    * **Header**: Displays the title "Log In".
    * **Input Fields**: Renders the email and password input fields using the `FormInput` component.
    * **Submit Button**: Triggers the `handleSubmit` function when clicked.

The component uses a flexbox layout to center the login form on the page. It also uses a custom CSS class (`glass-bg`) to apply a glassmorphism effect to the form container. 
