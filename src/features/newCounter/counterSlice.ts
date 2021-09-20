import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCount } from './countServiceApi';

// Data type describing the slice data as a state in redux store
interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initState: CounterState = {
    value: 0,
    status: 'idle',
};

export const incrementAsync = createAsyncThunk(
    // typePrefix: action type
    'counter/fetchCountAsync',
    // payloadCreator: callback for creating payload
    async (amount: number) => {
        // fetchCount().then(
        //     (x:number) => {
        //         console.log(`succeeded: ${x}`);
        //         return x;
        //     },
        //     (error?: string) => {
        //         console.log(`failed: ${error ?? ''}`)
        //         return -1;
        //     }
        // )
        // at its simplicity, just await
        return await fetchCount(amount);
    },
    // options: 
    undefined
);

// The createSlice function takes an options object how reducers can be created
// and associated with actions.
const counterSlice = createSlice({
    name: 'counter', // name of the slice
    initialState: initState,
    reducers: {
        // Each reducer is a callback function exposed to consumers.
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
    // Additional reducers
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        });
    },
});

export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
