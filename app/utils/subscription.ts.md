## Switch Cases Utility

This document provides documentation for the `switchCases` utility function.

### Table of Contents

| Section | Description |
|---|---|
| [Overview](#overview) | A brief summary of the `switchCases` function. |
| [Usage](#usage) | Instructions on how to use the `switchCases` function. |
| [Parameters](#parameters) | Detailed description of the function's parameters. |
| [Example](#example) | A practical example demonstrating how to use the `switchCases` function. |

### Overview

The `switchCases` function is a utility designed to handle different event types within a state management system. It uses a `switch` statement to execute different actions based on the `eventType` property within the provided `payload` object.

### Usage

The `switchCases` function takes a single object as an argument with the following properties:

* `payload`: An object containing data relevant to the event.
* `setState`: A function responsible for updating the state.

The function then performs different actions depending on the value of the `eventType` property within the `payload` object.

### Parameters

| Parameter | Type | Description |
|---|---|---|
| `payload` | Object | Contains event-specific data. Must include an `eventType` property indicating the type of event. |
| `setState` | Function | A function used to update the application state. |

### Example

```javascript
// Example state
const [items, setItems] = useState([]);

// Example payload
const payload = {
  eventType: 'INSERT',
  new: { id: 1, name: 'New Item' }
};

// Call switchCases
switchCases({ payload, setState: setItems });

// Result: items array will be updated to include the new item
// items: [{ id: 1, name: 'New Item' }]
```

In this example, the `switchCases` function is called with a `payload` object that has an `eventType` of 'INSERT' and a `new` property containing the data for the new item. The function then uses the `setState` function (in this case, `setItems`) to update the `items` array in the state with the new item. 
