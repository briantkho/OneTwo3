# Cell Component Documentation 

## Table of Contents 
* [Introduction](#introduction)
* [Code Structure](#code-structure)
* [Component Usage](#component-usage)
* [Props](#props)
* [Internal Components](#internal-components)
* [State Management](#state-management)
* [Styling](#styling)


## Introduction 
The `Cell` component is a reusable UI element that displays information about a task or item. It provides a visually appealing and informative representation of data, including title, description, status, time remaining, frequency, priority, and settings.

## Code Structure
The `Cell` component is written in TypeScript and utilizes React hooks for state management and component logic. It imports necessary components and functions from other modules:

| Import | Description |
|---|---|
| `dayCountdown` | A function from the `dateHandler` module responsible for calculating the number of days remaining until a specific date. |
| `Checkbox` | A custom component that provides a checkbox for marking tasks as complete. |
| `Tag` | A custom component that displays information tags with different categories. |
| `Settings` | A custom component responsible for handling settings related to the task. |
| `useEditModalStore` | A custom hook from the `stateManager` module that manages the state of an edit modal. |

## Component Usage
The `Cell` component is designed to be used as a standalone element within a list or grid layout. It renders a visually appealing card-like structure that displays the relevant data. 

## Props 
| Prop Name | Type | Description | 
|---|---|---|
| `category` | `string` | Represents the category or type of the task. Used for displaying the appropriate settings. |
| `disabled` | `boolean` | Determines if the cell should be disabled, preventing user interaction with elements like the checkbox. |
| `data` | `any` | An object containing all the data related to the task. The data object structure is expected to include properties like `title`, `description`, `status`, `end_date`, `frequency_per_week`, and `priority`. |

## Internal Components
The `Cell` component uses several internal components for rendering specific functionalities:
* `Checkbox`
* `Tag`
* `Settings`

## State Management
The `Cell` component utilizes the `useEditModalStore` hook for state management related to the edit modal:
* `setModalData`: A function to update the data that will be used in the edit modal.
* `setModalStateTrue`: A function to trigger the opening of the edit modal.

## Styling
The `Cell` component utilizes a combination of CSS classes to achieve its visual appearance:
* `bg-white-cell`: A class that sets the background color of the cell to white.
* `rounded-xl`: A class that applies a rounded corner style to the cell.
* `h-min`: A class that sets the height of the cell to the minimum required.
* `p-2`: A class that applies padding to the cell content.
* `flex`: A class that enables flexbox layout for the cell's content.
* `flex-col`: A class that arranges the cell's content in a vertical column.
* `gap-2`: A class that applies spacing between elements.
* `justify-center`: A class that centers the cell's content horizontally.
* `justify-between`: A class that distributes space evenly between the cell's content.
* `items-center`: A class that aligns the cell's content vertically to the center.
* `text-lg`: A class that sets the font size to large.
* `cursor-pointer`: A class that sets the cursor to a pointer on hover.
* `w-min`: A class that sets the width of the cell content to the minimum required.
* `whitespace-nowrap`: A class that prevents text from wrapping to the next line.
* `text-sm`: A class that sets the font size to small.
* `text-ellipsis`: A class that adds an ellipsis to the text if it overflows its container.
* `overflow-hidden`: A class that hides content that overflows its container.

These styling classes are applied to the `Cell` component's internal elements to create the desired layout and appearance. 
