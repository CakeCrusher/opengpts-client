// store/counter/counterSlice.ts
import { CounterState } from '@/store/types';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: CounterState = {
  value: 0,
};

export const resetCounterAsync = createAsyncThunk(
  'counter/resetAsync',
  async (_, { dispatch }) => {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(counterSlice.actions.reset());
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: state => {
      state.value = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(resetCounterAsync.fulfilled, state => {
      state.value = 0;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
