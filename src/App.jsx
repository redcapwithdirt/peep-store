import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

const Store = () => {
  return (
    <h1>i'm a store page</h1>
  );
}

const Inspiration = () => {
  return (
    <h1>I'm an inspiration page</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/inspiration' element={<Inspiration />} />
      </Route>
    </Routes>
  );
}

export default App;