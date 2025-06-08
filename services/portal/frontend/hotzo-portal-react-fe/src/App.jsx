import './App.css'

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Login from './pages/SignIn';
import Join from './pages/SignUp';
import Main from './components/Main';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Join />} />
      </Routes>
    </>
  )
}

export default App;
