## Loading Component Documentation

**Table of Contents**

* [Overview](#overview)
* [Usage](#usage)
* [Code Breakdown](#code-breakdown)

### Overview 

This component renders a loading screen with a spinning SVG logo. 

### Usage 

To use the Loading component, simply import it and render it:

```javascript
import { Loading } from './Loading'; 

// ...

<Loading />
```

### Code Breakdown

| Code Snippet | Description |
|---|---|
| ```javascript
import Image from 'next/image';
import oneTwo3 from '@/public/oneTwo3.svg';
``` |  Imports the `Image` component from Next.js and the `oneTwo3.svg` logo from the `public` directory. |
| ```javascript
export const Loading = () => {
  return (
    <div className="top-0 left-0 margin-auto flex fixed w-screen h-screen justify-center items-center backdrop-blur-lg z-50 bg-black bg-opacity-40">
      <Image className="animate-spin w-20" src={oneTwo3} alt="Logo" />
    </div>
  );
};
``` | Defines the `Loading` component. It returns a `div` element with the following properties: <br>
    * **`top-0 left-0 margin-auto flex fixed w-screen h-screen`**: Positions the loading screen to cover the entire viewport.
    * **`justify-center items-center`**: Centers the logo within the screen.
    * **`backdrop-blur-lg z-50 bg-black bg-opacity-40`**: Creates a semi-transparent black background with a blur effect and sets the z-index to 50, ensuring it stays on top of other elements.
    * **`Image`**: Renders the logo using the `Image` component with the following properties:
        * **`className="animate-spin w-20"`**: Adds the `animate-spin` class to make the logo spin and sets its width to 20 units.
        * **`src={oneTwo3}`**: Sets the source of the logo to the imported `oneTwo3.svg` file.
        * **`alt="Logo"`**: Provides an alternative text description for the logo.
  | 
