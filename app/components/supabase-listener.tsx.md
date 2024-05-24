## Supabase Listener Component Documentation

### Table of Contents

| Section | Description |
|---|---|
| 1. Overview | General description of the component. |
| 2. Usage | How to use the component. |
| 3. Implementation Details | Detailed breakdown of the code. |

### 1. Overview

The `SupabaseListener` component is a React component that listens for changes in the Supabase authentication state. It uses the `supabase.auth.onAuthStateChange` method to subscribe to these changes. When a change is detected, the component checks if the current access token matches the `serverAccessToken` prop. If they don't match, the component refreshes the page using the `router.refresh()` method.

### 2. Usage

To use the `SupabaseListener` component, pass the `serverAccessToken` prop. This prop should contain the access token used on the server-side.

```javascript
<SupabaseListener serverAccessToken="your-server-access-token" />
```

**Important:** The `serverAccessToken` prop is optional. If it's not provided, the component will not refresh the page even if the access token changes.

### 3. Implementation Details

| Code Snippet | Description |
|---|---|
| `'use client'` |  This directive indicates that the component is a client-side component, meaning it will be rendered in the browser.  |
| `import { useRouter } from 'next/navigation';` | Imports the `useRouter` hook from the `next/navigation` package. This hook provides access to the Next.js router, which allows us to refresh the page. |
| `import { useEffect } from 'react';` | Imports the `useEffect` hook from the `react` package. This hook allows us to perform side effects within our component, such as subscribing to events. |
| `import { useSupabase } from './supabase-provider';` |  Imports the `useSupabase` hook from the `supabase-provider` file. This hook provides access to the Supabase client. |
| `export default function SupabaseListener({ serverAccessToken, }: { serverAccessToken?: string; })` |  Defines the `SupabaseListener` component. It accepts a single prop, `serverAccessToken`, which is optional. |
| `const { supabase } = useSupabase();` |  Initializes the `supabase` variable using the `useSupabase` hook, which provides access to the Supabase client.  |
| `const router = useRouter();` |  Initializes the `router` variable using the `useRouter` hook, which provides access to the Next.js router.  |
| `useEffect(() => { ... }, [serverAccessToken, router, supabase]);` |  This `useEffect` hook sets up the listener for Supabase authentication state changes. It runs only once when the component mounts.  |
| `const { data: { subscription }, } = supabase.auth.onAuthStateChange((event, session) => { ... });` |  This line subscribes to the Supabase authentication state changes. The `onAuthStateChange` method returns an object containing the subscription and the current session.  |
| `if (session?.access_token !== serverAccessToken) { router.refresh(); }` |  If the access token in the current session doesn't match the provided `serverAccessToken`, the component refreshes the page.  |
| `return () => { subscription.unsubscribe(); };` |  This function is returned from the `useEffect` hook. It is called when the component unmounts, ensuring the subscription is cleaned up to prevent memory leaks.  |
| `return null;` |  This line renders the component. Since this component is only responsible for listening for events and refreshing the page, it doesn't render any content on the screen.  | 
