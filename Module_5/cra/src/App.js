import React from 'react';
import './App.css';
import Main from './components/layout/Main';
import MainLayout from './components/layout/MainLayout';
import Index from './components/LearingUseEffect/Index';

function App() {
  return (
    <MainLayout>
      {/* <Main /> */}
      <Index/>
    </MainLayout>
  );
}

export default App;
