export interface CounterState {
  value: number;
}

export type RootState = {
  counter: CounterState;
};

// // Could be useful when getting state from a thunk function
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
