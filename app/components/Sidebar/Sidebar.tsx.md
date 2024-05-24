## Sidebar Component Documentation 

**Table of Contents**

* [Overview](#overview)
* [Usage](#usage)
* [Component Structure](#component-structure)
    * [SidebarIcon Component](#sidebaricon-component)
    * [Sidebar Component](#sidebar-component)
* [Styling](#styling)

<br>

### Overview 

This component defines a sidebar navigation menu for a user dashboard. The sidebar displays a series of links to different user-related pages, each represented by an icon. 

<br>

### Usage 

To use the `Sidebar` component, simply import it into your desired page and render it.

```javascript
import Sidebar from './Sidebar';

// ... your component

<Sidebar />

// ... rest of your component
```

<br>

### Component Structure

#### SidebarIcon Component

This component renders a single icon with styling applied.

* **Props:**
    * `icon`: The React icon element to be displayed. 

* **Example:**

```javascript
<SidebarIcon icon={<BsPersonCircle />} />
```

This will render a `BsPersonCircle` icon within a container with the following styling:

* `text-4xl`: Sets the font size to 4x-large.
* `transition-all ease-in-out`: Enables smooth transitions for all properties.
* `hover:scale-110`: Increases the icon size by 10% on hover.

<br>

#### Sidebar Component

This component renders the entire sidebar structure.

* **Structure:**

    * The sidebar is contained within a `div` element with the following classes:
        * `glass-bg`: Applies a glassmorphism background effect.
        * `w-min h-min`: Sets the width and height to the minimum required.
        * `flex flex-col items-center justify-around gap-6 p-6 rounded-2xl`: Applies flexbox styling for column orientation, centering, spacing, and padding.
        * `float-left mr-10`: Floats the sidebar to the left and adds a margin of 10 pixels to the right.

    * The sidebar contains five `Link` components, each representing a different user page:
        * `/user/dashboard`: Displays a grid icon (`BsGrid1X2`).
        * `/user/goals`: Displays an award icon (`BsAward`).
        * `/user/journals`: Displays a journal icon (`BsJournalBookmark`).
        * `/user/habits`: Displays a check mark icon (`BsCheck2`).
        * `/user/profile`: Displays a person icon (`BsPersonCircle`).

    * Each `Link` component wraps a `SidebarIcon` component, providing the appropriate icon for each page.

<br>

### Styling

The component uses the following CSS classes:

* `glass-bg`: This class applies a glassmorphism effect to the sidebar background, creating a translucent and modern look.
* `text-4xl`: Sets the font size of the icons to 4x-large.
* `transition-all ease-in-out`: Enables smooth transitions for all properties, providing a pleasant user experience.
* `hover:scale-110`: Increases the icon size by 10% on hover, providing visual feedback to the user.

<br>

This documentation provides a comprehensive overview of the `Sidebar` component and its structure. It covers the usage, component structure, and styling, making it easy for developers to understand and integrate this component into their projects. 🎉
