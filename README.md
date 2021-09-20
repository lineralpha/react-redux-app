This project was bootstrapped with [Create React App][1], using the [Redux][2] and [Redux Toolkit][3] template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Redux Patterns

Using Redux/RTK to persist app state in store needs to follow these patterns to minimize boilerplate code as much as possible.

### Store

#### 1. create and config the store
Use `configStore` to create and initialize the store. `configStore` accepts a configuration object to specify how the store should be created.

```ts
const store = configureStore({
    // All reducers from sources managed by the store must be 
    // combined in this 'root reducer'
    reducer: {
        counter: counterReducer,
        [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    },
    // Make sure to add the middleware from 'api slices'
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogApiSlice.middleware),
    // Optionally, preloaded (initial) state in the store
    preloadedState: undefined
});
```

#### 2. export the store object
Additionally, export some useful types as well:

```ts
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> =
                ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
```
#### 3. export hooks specific to the store

```ts
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Source Slices and Reducers
There are two source slice models: `createSlice` and `createApi`.

#### 1. `createSlice` 

`createSlice` accepts an options object, including a 'slice name' which must be unique in the store, an initial state, and reducers on the slice.

```ts
const counterSlice = createSlice({
    name: 'counter', // name of the slice, must be unique in store
    initialState: initState, // initial state for this slice of the app state in store
    reducers: {
        // Each reducer is a callback function exposed to consumers as action.
        increment: (state) => {
            state.value += 1;
        },
        decrement: function(state) {
            state.value -= 1;
        },
        increaseByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
    // Additional reducers built using the builder
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
});
```

Before it is used in the `createConfig`, The `incrementAsync` reducer should be created using `createAsyncThunk`:

```ts
export const incrementAsync = createAsyncThunk(
    // typePrefix: action type
    'counter/fetchCountAsync',
    // payloadCreator: callback for creating payload
    async (amount: number) => {
        return await fetchCount(amount);
    }
);
```

Lastly, we can export the slice reducer and it's actions

```ts
export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

#### 2. `createApi`

`createApi` is the core function in RTK Query to create an 'api slice'. It accepts an options object to specify the endpoints on the API server.

```ts
const dogApiSlice = createApi({
    reducerPath: 'dog-api', // Unique key used to mount the api slice onto the store
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers;
        },
        // Optionally, a custom fetch function can be used instead of the built-in fetch function
        fetchFn: undefined,
    }),
    // List of all endpoints you want to connect to
    endpoints: (builder) => {
        return {
            // Use the builder to build each endpoint
            fetchBreeds: builder.query<Breed[], number | void>({
                query: (limit = 10) => `/breeds?limit${limit}`,
            }),
            // Add more endpoints
        };
    },
});
```
After the api slice was created, we need to export the query hook:

```ts
// RTK automatically creates query hooks for endpoints
export const { useFetchBreedsQuery, useLazyFetchBreedsQuery } = dogApiSlice;
export default dogApiSlice;
```

### Fetch and update state in store

Now we can use the store and the reducers/actions in our app.

```ts
import { useAppDispatch, useAppSelector } from "../appStore/hooks";
import counterReducer, {
    increment,
    decrement,
    increaseByAmount,
    incrementAsync,
} from "../features/newCounter/counterSlice";
...

    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

        <button
            className={styles.button}
            aria-label="Increment"
            onClick={() => dispatch(increment())}
        >
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[1]: https://github.com/facebook/create-react-app
[2]: https://redux.js.org/
[3]: https://redux-toolkit.js.org/
