## Root Layout Documentation

This document provides an internal code documentation for the `RootLayout` component.

### Table of Contents

* [Introduction](#introduction)
* [Code Overview](#code-overview)
* [Supabase Integration](#supabase-integration)
* [Layout Components](#layout-components)
* [Code Example](#code-example)

### Introduction 

The `RootLayout` component serves as the foundation for all pages within the application. It defines the core structure, styles, and essential components that are present across the entire website. 

### Code Overview

The code imports necessary modules and defines the `RootLayout` component:

| Import                                    | Description                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------- |
| `'server-only'`                             | Specifies that the component should be rendered exclusively on the server-side.      |
| `'./globals.css'`                           | Imports global styles for the application.                                           |
| `SupabaseListener` from `'./components/supabase-listener'` | A component responsible for handling Supabase authentication events.        |
| `SupabaseProvider` from `'./components/supabase-provider'` | A component that provides Supabase context to child components.        |
| `{ createClient }` from `'./utils/supabase-server'` | A function to create a Supabase client instance.                            |
| `Background` from `'./components/Background/Background'` | A component that renders the application's background.                       |
| `Footer` from `'./components/Footer'` | A component that renders the application's footer.                              |

The `revalidate` property is set to `0`, indicating that this layout should **not be cached**. This ensures that each request renders the latest version of the layout.

### Supabase Integration

The `RootLayout` component utilizes Supabase for authentication and session management. 

* The `createClient` function is used to create a Supabase client instance.
* The `supabase.auth.getSession()` method retrieves the current user's session data.
* The `SupabaseListener` component is provided with the user's `access_token` (if available). This component will listen for authentication events and update the application state accordingly.
* The `SupabaseProvider` component wraps the entire layout and provides Supabase context to child components, allowing them to interact with Supabase features.

### Layout Components

The `RootLayout` component defines the following components:

* **`<html>`:** The root element of the HTML document.
* **`<head>`:** The head section of the HTML document, used for metadata and stylesheets.
* **`<body>`:** The body of the HTML document, containing the main content of the page.
* **`<SupabaseProvider>`:** The Supabase context provider, responsible for managing Supabase authentication and data.
* **`<SupabaseListener>`:** A component that listens for Supabase authentication events.
* **`children`:** Represents the content of the page, passed as props.
* **`<Footer>`:** The application's footer.
* **`<Background>`:** The application's background.

### Code Example

```javascript
import 'server-only';
import './globals.css';

import SupabaseListener from './components/supabase-listener';
import SupabaseProvider from './components/supabase-provider';
import { createClient } from './utils/supabase-server';
import Background from './components/Background/Background';
import Footer from './components/Footer';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className="dark:bg-black dark:text-white-bg dark:border-white-bg dark:outline-white-bg font-thin">
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
          <Footer />
          <Background />
        </SupabaseProvider>
      </body>
    </html>
  );
}
```