import '@mantine/core/styles.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
   <HomePage/>
    </MantineProvider>
  );
}

export default App;
