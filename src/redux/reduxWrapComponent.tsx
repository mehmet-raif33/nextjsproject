'use client';

import { Provider } from 'react-redux';
import { maStore } from '@/redux/store';
import { ReactNode } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={maStore}>{children}</Provider>;
};

export default ReduxProvider;