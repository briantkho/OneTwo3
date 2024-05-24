## Modal Selector Component Documentation

### Table of Contents
1. [Overview](#overview)
2. [Usage](#usage)
3. [Code Breakdown](#code-breakdown)
    * [Imports](#imports)
    * [State Management](#state-management)
    * [Modal Handler](#modal-handler)
    * [Rendering](#rendering)

### Overview 
This component, `ModalSelector`, dynamically renders different modal components based on the state of the application.  It uses state management to determine which modal should be displayed and passes relevant data to the modal component. 

### Usage
The `ModalSelector` component is responsible for displaying the appropriate modal based on the current state of the application. It does this by utilizing a state management system to track which modal should be active. The modal state is then used to dynamically render the correct modal component.

### Code Breakdown

#### Imports
* `ItemModal`:  Component used for displaying a modal for editing items. 
* `Modal`:  Base component for displaying all modals.
* `TasksModal`: Component for displaying a modal related to tasks.
* `GoalsModal`: Component for displaying a modal related to goals.
* `HabitsModal`: Component for displaying a modal related to habits.
* `useGoalModalStore`, `useHabitModalStore`, `useTaskModalStore`, `useEditModalStore`:  Hooks for accessing state management stores for different modal types.

#### State Management
The `ModalSelector` component utilizes state management to track which modal should be active. The state is managed using hooks from a separate state management system.  The code includes comments that outline the intended use of the state management hooks, but the specific implementation of the hooks is not provided in the code.

#### Modal Handler 
The `modalHandler` function determines which modal component to render based on the current state of each modal type.

| Modal Type | Condition | Component |
|---|---|---|
| Goal Modal | `getGoalModalState` is true | `GoalsModal` |
| Habit Modal | `getHabitModalState` is true | `HabitsModal` |
| Task Modal | `getTaskModalState` is true | `TasksModal` |
| Edit Modal | `getEditModalState` is true | `ItemModal` (with data from `getEditModalData`) |

#### Rendering
The `ModalSelector` component renders a `div` element that contains the output of the `modalHandler` function. This effectively renders the correct modal based on the current state of the application. 
