## UserLayout Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| [Overview](#overview) |  A high-level description of the UserLayout component. |
| [Usage](#usage) |  Instructions on how to use the UserLayout component. |
| [Props](#props) |  A list of the UserLayout component's props. |
| [Example](#example) |  A code example demonstrating how to use the UserLayout component. |

### Overview

The `UserLayout` component provides a basic layout for user-facing pages in the application. It includes a sidebar and a modal selector, offering a consistent structure and user experience.

### Usage

To use the `UserLayout` component, simply wrap your page content within it.

```javascript
import UserLayout from './UserLayout';

function MyPage() {
  return (
    <UserLayout>
      {/* Your page content here */}
    </UserLayout>
  );
}
```

### Props

The `UserLayout` component accepts the following props:

| Prop | Type | Description |
|---|---|---|
| `children` | `React.ReactNode` | The content to be displayed within the layout. |

### Example

```javascript
import UserLayout from './UserLayout';

function MyPage() {
  return (
    <UserLayout>
      <h1>Welcome to My Page</h1>
      <p>This is an example page using the UserLayout component.</p>
    </UserLayout>
  );
}
```

This example shows how to wrap page content within the `UserLayout` component. The `UserLayout` component will automatically render the sidebar and modal selector, providing a consistent layout for the page. 
