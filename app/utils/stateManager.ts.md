## Internal Code Documentation: Modal State Management

**Table of Contents**

- [Modal State Management](#modal-state-management)
  - [Overview](#overview)
  - [Modal State Interfaces](#modal-state-interfaces)
    - [`ModalState`](#modalstate)
    - [`EditModalState`](#editmodalstate)
  - [Modal Stores](#modal-stores)
    - [`useGoalModalStore`](#usegoalmodalstore)
    - [`useHabitModalStore`](#usehabitmodalstore)
    - [`useTaskModalStore`](#usetaskmodalstore)
    - [`useEditModalStore`](#useeditmodalstore)


### Overview

This code implements a state management system for modals using the `zustand` library. It provides separate stores for different modal types, allowing for independent control of their visibility and data.

### Modal State Interfaces

#### `ModalState`

| Property | Type | Description |
|---|---|---|
| `modalState` | `boolean` | Indicates whether the modal is currently visible. |
| `setModalStateTrue` | `() => void` | Sets `modalState` to `true`, showing the modal. |
| `setModalStateFalse` | `() => void` | Sets `modalState` to `false`, hiding the modal. |

#### `EditModalState`

| Property | Type | Description |
|---|---|---|
| `modalState` | `boolean` | Indicates whether the modal is currently visible. |
| `data` | `any` | Data associated with the modal (e.g., for editing an item). |
| `setModalStateTrue` | `() => void` | Sets `modalState` to `true`, showing the modal. |
| `setModalStateFalse` | `() => void` | Sets `modalState` to `false`, hiding the modal. |
| `setModalData` | `(data: any) => void` | Sets the `data` associated with the modal. |

### Modal Stores

#### `useGoalModalStore`

This store manages the visibility state of the Goal modal.

```javascript
export const useGoalModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));
```

#### `useHabitModalStore`

This store manages the visibility state of the Habit modal.

```javascript
export const useHabitModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));
```

#### `useTaskModalStore`

This store manages the visibility state of the Task modal.

```javascript
export const useTaskModalStore = create<ModalState>()((set) => ({
  modalState: false,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
}));
```

#### `useEditModalStore`

This store manages the visibility state and associated data of the Edit modal.

```javascript
export const useEditModalStore = create<EditModalState>()((set) => ({
  modalState: false,
  data: null,
  setModalStateTrue: () =>
    set((state) => ({
      modalState: true,
    })),
  setModalStateFalse: () =>
    set((state) => ({
      modalState: false,
    })),
  setModalData: (data) =>
    set((state) => ({
      data: data,
    })),
}));
``` 
