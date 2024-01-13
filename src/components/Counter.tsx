// components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  resetCounterAsync,
} from '@/store/counter/counterSlice';
import { AppDispatch, RootState } from '@/store/store';

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>{' '}
      {/* Extra curly braces */}
      <button onClick={() => dispatch(resetCounterAsync())}>Reset</button>
    </div>
  );
};
