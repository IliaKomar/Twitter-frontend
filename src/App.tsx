import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
