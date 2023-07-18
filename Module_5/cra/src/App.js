import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import MainLayout from './components/layout/MainLayout';
import LearningUseEffect from './components/LearingUseEffect/Index';
import LearningUseState from './components/LearningUseState';
import StudentDetail from './components/LearingUseEffect/StudentDetail';
import NotFound from './components/layout/NotFound';
import CreateStudent from './components/LearingUseEffect/CreateStudent';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MainLayout>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/learning-use-state' element={<LearningUseState />} />
        <Route path='/learning-use-effect' element={<LearningUseEffect />} />
        <Route path='/student-detail/:stdid' element={<StudentDetail />} />
        <Route path='/student/create' element={<CreateStudent />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
