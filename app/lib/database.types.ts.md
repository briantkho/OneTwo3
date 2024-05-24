# Database Schema Documentation

## Table of Contents 

* [Database Interface](#database-interface)
    * [graphql\_public](#graphql_public)
        * [Functions](#graphql_public-functions)
            * [graphql](#graphql_public-functions-graphql)
    * [public](#public)
    * [storage](#storage)
        * [Tables](#storage-tables)
            * [buckets](#storage-tables-buckets)
            * [migrations](#storage-tables-migrations)
            * [objects](#storage-tables-objects)
        * [Functions](#storage-functions)
            * [extension](#storage-functions-extension)
            * [filename](#storage-functions-filename)
            * [foldername](#storage-functions-foldername)
            * [get_size_by_bucket](#storage-functions-get_size_by_bucket)
            * [search](#storage-functions-search)

## Database Interface

The `Database` interface defines the structure of the database, including the different schemas (graphql\_public, public, storage) and their components (Tables, Views, Functions, Enums, CompositeTypes).

### graphql\_public

The `graphql_public` schema exposes data and functionality through a GraphQL API.

#### Functions

##### graphql

The `graphql` function allows for executing GraphQL queries.

| Parameter | Type | Description |
|---|---|---|
| operationName | string | The name of the GraphQL operation to execute. |
| query | string | The GraphQL query string. |
| variables | `Json` | Variables to be passed to the GraphQL query. |
| extensions | `Json` | Optional extensions to be passed to the GraphQL query. |

**Returns:**

* `Json`: The result of the GraphQL query execution.

### public

The `public` schema contains public tables, views, functions, enums and composite types.

### storage

The `storage` schema handles data storage.

#### Tables

##### buckets

The `buckets` table stores information about storage buckets.

| Column | Type | Description |
|---|---|---|
| created_at | string | Timestamp when the bucket was created. |
| id | string | Unique identifier for the bucket. |
| name | string | Name of the bucket. |
| owner | string |  The user who owns the bucket. |
| public | boolean | Whether the bucket is publicly accessible. |
| updated_at | string | Timestamp when the bucket was last updated. |

**Insert:**

| Parameter | Type | Description |
|---|---|---|
| created_at | string | Timestamp when the bucket was created. |
| id | string | Unique identifier for the bucket. |
| name | string | Name of the bucket. |
| owner | string | The user who owns the bucket. |
| public | boolean | Whether the bucket is publicly accessible. |
| updated_at | string | Timestamp when the bucket was last updated. |

**Update:**

| Parameter | Type | Description |
|---|---|---|
| created_at | string | Timestamp when the bucket was created. |
| id | string | Unique identifier for the bucket. |
| name | string | Name of the bucket. |
| owner | string | The user who owns the bucket. |
| public | boolean | Whether the bucket is publicly accessible. |
| updated_at | string | Timestamp when the bucket was last updated. |

##### migrations

The `migrations` table stores information about database migrations.

| Column | Type | Description |
|---|---|---|
| executed_at | string | Timestamp when the migration was executed. |
| hash | string | Hash of the migration script. |
| id | number | Unique identifier for the migration. |
| name | string | Name of the migration. |

**Insert:**

| Parameter | Type | Description |
|---|---|---|
| executed_at | string | Timestamp when the migration was executed. |
| hash | string | Hash of the migration script. |
| id | number | Unique identifier for the migration. |
| name | string | Name of the migration. |

**Update:**

| Parameter | Type | Description |
|---|---|---|
| executed_at | string | Timestamp when the migration was executed. |
| hash | string | Hash of the migration script. |
| id | number | Unique identifier for the migration. |
| name | string | Name of the migration. |

##### objects

The `objects` table stores information about objects stored in buckets.

| Column | Type | Description |
|---|---|---|
| bucket_id | string | Identifier of the bucket the object belongs to. |
| created_at | string | Timestamp when the object was created. |
| id | string | Unique identifier for the object. |
| last_accessed_at | string | Timestamp when the object was last accessed. |
| metadata | `Json` | Metadata associated with the object. |
| name | string | Name of the object. |
| owner | string | The user who owns the object. |
| path_tokens | string[] |  Array of path tokens representing the object's location within the bucket. |
| updated_at | string | Timestamp when the object was last updated. |

**Insert:**

| Parameter | Type | Description |
|---|---|---|
| bucket_id | string | Identifier of the bucket the object belongs to. |
| created_at | string | Timestamp when the object was created. |
| id | string | Unique identifier for the object. |
| last_accessed_at | string | Timestamp when the object was last accessed. |
| metadata | `Json` | Metadata associated with the object. |
| name | string | Name of the object. |
| owner | string | The user who owns the object. |
| path_tokens | string[] |  Array of path tokens representing the object's location within the bucket. |
| updated_at | string | Timestamp when the object was last updated. |

**Update:**

| Parameter | Type | Description |
|---|---|---|
| bucket_id | string | Identifier of the bucket the object belongs to. |
| created_at | string | Timestamp when the object was created. |
| id | string | Unique identifier for the object. |
| last_accessed_at | string | Timestamp when the object was last accessed. |
| metadata | `Json` | Metadata associated with the object. |
| name | string | Name of the object. |
| owner | string | The user who owns the object. |
| path_tokens | string[] |  Array of path tokens representing the object's location within the bucket. |
| updated_at | string | Timestamp when the object was last updated. |

#### Functions

##### extension

The `extension` function returns the file extension of a given object name.

| Parameter | Type | Description |
|---|---|---|
| name | string | Name of the object. |

**Returns:**

* `string`: The file extension of the object.

##### filename

The `filename` function returns the filename of a given object name.

| Parameter | Type | Description |
|---|---|---|
| name | string | Name of the object. |

**Returns:**

* `string`: The filename of the object.

##### foldername

The `foldername` function returns the folder path of a given object name.

| Parameter | Type | Description |
|---|---|---|
| name | string | Name of the object. |

**Returns:**

* `string[]`: Array of folder names representing the object's path.

##### get_size_by_bucket

The `get_size_by_bucket` function returns the total size of objects in each bucket.

| Parameter | Type | Description |
|---|---|---|
|  |  |  |

**Returns:**

* `{ size: number; bucket_id: string }[]`: Array of objects containing the size of each bucket and its identifier.

##### search

The `search` function searches for objects based on various criteria.

| Parameter | Type | Description |
|---|---|---|
| prefix | string | The prefix to search for. |
| bucketname | string | Name of the bucket to search in. |
| limits | number | The maximum number of results to return. |
| levels | number | The number of levels to search in. |
| offsets | number | The offset to start the search from. |
| search | string | The search term. |
| sortcolumn | string | The column to sort results by. |
| sortorder | string | The order to sort results in. |

**Returns:**

* `{ name: string; id: string; updated_at: string; created_at: string; last_accessed_at: string; metadata: Json }[]`: Array of objects matching the search criteria.

