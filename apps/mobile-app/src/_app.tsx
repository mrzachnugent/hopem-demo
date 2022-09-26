import { registerRootComponent } from 'expo';
import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { TRPCProvider } from './utils/trpc';

const App = () => {
  return (
    <TRPCProvider>
      <HomeScreen />
    </TRPCProvider>
  );
};

registerRootComponent(App);
