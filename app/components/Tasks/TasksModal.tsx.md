## TasksModal Component Documentation

**Table of Contents**

* [Overview](#overview)
* [Code Breakdown](#code-breakdown)
    * [Imports](#imports)
    * [Component Function](#component-function)
        * [State Management](#state-management)
        * [Input Handling](#input-handling)
        * [Form Submission](#form-submission)
        * [Modal Configuration](#modal-configuration)
* [Usage](#usage)

### Overview 
This component renders a modal for creating new tasks. It utilizes a shared state manager and custom components to provide a user-friendly interface. 

### Code Breakdown

#### Imports

| Import | Description |
|---|---|
| `Modal` | The modal component from the `app/components/Modal` directory. |
| `CategoryInput` | An object containing input configurations for the tasks modal from the `app/utils/CategoryInputs` directory. |
| `CategoryTypes` | An object containing category types, including `tasks` from the `app/utils/CategoryTypes` directory. |
| `useState` | A React Hook for managing component state. |
| `createClient` | A function for creating a Supabase client from the `app/utils/supabase-browser` directory. |
| `useTaskModalStore` | A custom hook for interacting with the tasks modal state from the `app/utils/stateManager` directory. |

#### Component Function

##### State Management 

* The component uses the `useTaskModalStore` hook to access and update the modal's state.
* The `toggleModal` function is used to close the modal.
* The component maintains a local state using `useState` to store form input values:
    * `title`
    * `description`
    * `priority`
    * `endDate`

##### Input Handling

* The `onChange` function updates the component state whenever an input field's value changes:
    * It creates a new object based on the current state.
    * It dynamically updates the corresponding property with the new value from the input field.

##### Form Submission

* The `handleSubmit` function handles form submission:
    * It prevents the default form submission behavior.
    * It retrieves the currently logged-in user's information using Supabase's authentication API.
    * It inserts a new task record into the 'task' table in the Supabase database:
        * `user_id` is set to the logged-in user's ID.
        * Other fields are populated from the component's state.
        * `end_date` is set to the current date if no end date is provided.
    * It reloads the page if the insertion was successful.
    * It displays an alert message if an error occurs.

##### Modal Configuration

* The `data` object provides configuration data to the `Modal` component:
    * `stateValues`: The current state of the form inputs.
    * `changeEvent`: The `onChange` function for handling input changes.
    * `inputs`: An array of input configurations from `CategoryInput.task`.
    * `submit`: The `handleSubmit` function for submitting the form.

* The `Modal` component is rendered with the following properties:
    * `key`: `CategoryTypes.tasks` for unique identification.
    * `category`: `CategoryTypes.tasks` to identify the type of modal.
    * `data`: The configuration data object.

### Usage

The `TasksModal` component is expected to be used within a context where a modal can be presented to the user. It allows them to create new tasks and submit them to the Supabase database. 
