import store from './store/store';
import User from './companents/User';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Login from './companents/Login/Login';
import Sidebar from './companents/Sidebar/Sidebar';
import { Header } from './companents/Header/Header';
import './App.scss';

function App() {
  const obj = useSelector((state) => state.employ)
  const [arr, setArr] = useState([obj.object])

  useEffect(() => {
    setArr(obj.object)
  }, [obj]);

  return (
    <>
      <div className="app">
        <Sidebar />
        <Header />
        <User arr={arr} setArr={setArr} />
      </div>
    </>
  );
}

export default App;
