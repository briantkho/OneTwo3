## Card Component Documentation 

**Table of Contents** 
* [Description](#description)
* [Usage](#usage)
* [Props](#props)
* [Code Breakdown](#code-breakdown)
* [Functions](#functions)

### Description 
The `Card` component is responsible for displaying a list of items, such as tasks, based on a specific category and filter status. It dynamically fetches data from the Supabase database and renders it in a visually appealing manner.

### Usage 
The `Card` component is used to display lists of items belonging to a specific category, potentially filtered by status. It leverages Supabase to retrieve and display the relevant data.

### Props 
| Prop | Type | Description | Default |
|---|---|---|---|
| `category` | `string` | The name of the category to display items for. | - |
| `filterStatus` | `number` | An optional filter status to filter items by. | - |
| `header` | `string` | An optional header to display above the list of items. | - |


### Code Breakdown 
The `Card` component is implemented as follows:

```javascript
'use client';

import { Cell } from './Cell';

import ToggleModal from '@/app/user/dashboard/ToggleComponent';
import { HeaderTypes } from '../utils/CategoryTypes';
import { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase-browser';
import { Loading } from './Loading';

type CardType = {
  category: string;
  filterStatus?: number;
  header?: string;
};

const supabase = createClient();

export const Card = ({ category, filterStatus, header }: CardType) => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const categoryString = category.toLowerCase().slice(0, -1);

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await supabase.auth.getUser();

      if (header) {
        let { data, error, status } = await supabase
          .from(categoryString)
          .select('*')
          .eq('status', filterStatus)
          .eq('user_id', user.user?.id);

        if (error && status !== 406) {
          throw error;
        }

        if (!data) throw error;

        setData(data);
        setLoading(false);
      } else if (!filterStatus) {
        let { data, error, status } = await supabase
          .from(categoryString)
          .select('*')
          .eq('user_id', user.user?.id);

        if (error && status !== 406) {
          throw error;
        }

        if (!data) throw error;

        setData(data);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const renderAmount = () => {
    if (data.length > 0) {
      if (header === HeaderTypes.completed) {
        return (
          data
            // @ts-expect-error
            .filter((obj) => obj.status)
            .map((obj: any) => (
              <Cell
                category={category}
                key={obj.id}
                data={obj}
                disabled={true}
              />
            ))
        );
      } else if (header === HeaderTypes.todo) {
        return (
          data
            // @ts-expect-error
            .filter((obj) => obj.status === 0 || obj.status === 1)
            .map((obj: any) => (
              <Cell
                category={category}
                key={obj.id}
                data={obj}
                disabled={false}
              />
            ))
        );
      } else if (!header) {
        const filteredData = data
          // @ts-expect-error
          .filter((obj) => obj.status === 0 || obj.status === 1);

        if (filteredData.length < 1) {
          return <p>All {category} Completed.</p>;
        } else {
          return filteredData
            .slice(0, 3)
            .map((obj: any) => (
              <Cell category={category} key={obj.id} data={obj} />
            ));
        }
      }
    } else {
      return <p>No {category} Found.</p>;
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="glass-bg flex flex-col justify-between gap-4 w-full rounded-3xl p-4 h-min max-h-min">
        <div className="flex items-center justify-between">
          {header ? (
            <p className="text-xl dark:text-white-bg">{header}</p>
          ) : (
            <p className="text-xl dark:text-white-bg">{category}</p>
          )}
          {header === HeaderTypes.completed ? null : (
            <ToggleModal category={category} />
          )}
        </div>
        <div className="flex flex-col gap-2 h-full">{renderAmount()}</div>
      </div>
    </>
  );
};
```

### Functions 

**`renderAmount()`**
- This function is responsible for rendering the list of items based on the provided `header` and `filterStatus` props.
- It checks the `header` prop:
    - If it's `HeaderTypes.completed`, it filters the data to only include items with a `status` of `true` (completed) and maps them to `Cell` components with a `disabled` prop set to `true`.
    - If it's `HeaderTypes.todo`, it filters the data to only include items with a `status` of `0` or `1` (not completed) and maps them to `Cell` components with a `disabled` prop set to `false`.
    - If there's no `header`, it filters the data to only include items with a `status` of `0` or `1` (not completed) and maps the first three items to `Cell` components. 
    - If no data is found, it displays a message indicating that no items were found.

**`useEffect()`**
- This hook is used to fetch data from the Supabase database when the component mounts. 
- It fetches user authentication data and then retrieves data from the corresponding table based on the provided category and filter status.
- If an error occurs during data retrieval, it throws an error.
- It sets the retrieved data to the `data` state and sets the `loading` state to `false` after data is fetched.