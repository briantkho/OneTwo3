## FormInput Component Documentation

**Table of Contents**

* [Introduction](#introduction)
* [Usage](#usage)
* [Props](#props)
* [Example](#example)

### Introduction 

The `FormInput` component is a reusable UI element that renders a basic form input field with a label. It is designed to be flexible and customizable, allowing for easy integration into various form structures.

### Usage

The `FormInput` component can be used within a React application to create simple input fields for collecting user data. It accepts a set of props that define the appearance and behavior of the input.

### Props

| Prop | Type | Description | Default |
|---|---|---|---|
| `label` | `string` | The text label displayed alongside the input field. | - |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Event handler triggered when the input value changes. | - |
| `id` | `string` | The unique identifier for the input field. | - |
| `inputProps` | `any` | Additional props passed directly to the underlying `input` element. | - |

### Example

```javascript
import React from 'react';
import { FormInput } from './FormInput';

const MyForm = () => {
  const [username, setUsername] = React.useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <FormInput 
        label="Username" 
        id="username" 
        onChange={handleUsernameChange}
        value={username}
      />
    </form>
  );
};
```

This example demonstrates how to use the `FormInput` component to create an input field for collecting a username. The `onChange` prop is used to update the `username` state variable whenever the input value changes. The `value` prop is used to set the initial value of the input field. 
