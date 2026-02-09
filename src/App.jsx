import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TeacherRoutes from './routes/TeacherRoutes';

function App() {
  return (
    <BrowserRouter>
      <TeacherRoutes />
    </BrowserRouter>
  );
}

export default App;
