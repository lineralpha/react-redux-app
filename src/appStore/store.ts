import { configureStore, getDefaultMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import dogApiSlice from '../features/dog-api/dogApiSlice';
import counterReducer from '../features/newCounter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogApiSlice.reducerPath]: dogApiSlice.reducer,
    },
    // Add the dog-api as middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogApiSlice.middleware),
    // Optionally, preloaded (initial) state in the store
    preloadedState: undefined
});

// This is optional. but required for refetchOnMount/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> =
                ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
