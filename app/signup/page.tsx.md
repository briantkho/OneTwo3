## SignUpPage Component Documentation

**Table of Contents**

* [Introduction](#introduction)
* [Component Structure](#component-structure)
* [Component Properties](#component-properties)
* [Component Methods](#component-methods)
* [Usage](#usage)

### Introduction 
This component provides a user interface for creating a new account. 

### Component Structure

This component is structured as a React functional component. It utilizes the following elements:

| Element | Description |
|---|---|
| `useState` | A React hook to manage state for the user input values. |
| `FormInput` | A custom component for handling form inputs. |
| `Navbar` | A custom component for the navigation bar. |
| `useSupabase` | A custom hook to interact with the Supabase database. |

### Component Properties

This component does not have any specific properties.

### Component Methods

| Method | Description |
|---|---|
| `onChange` | Handles changes in the input fields. Updates the component's state to reflect the new input values. |
| `handleSubmit` | Handles form submission. Attempts to create a new user account using Supabase authentication. Displays alerts to the user based on the success or failure of the operation. |

### Usage

This component is used to display the sign up page. It renders a form with input fields for email, password, and password confirmation. Upon submission, it attempts to create a new user account using Supabase authentication. 

**Example:**

```jsx
<SignUpPage />
```

This will render the sign up page with the form for creating a new account. 
