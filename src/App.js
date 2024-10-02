import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Banner from './components/Banner';
import { useEffect, useState } from 'react';
import Deals from './components/Deals';
import Burgers from './components/Burgers'
import LoadingItemList from './components/LoadingItemList';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(menuData => {
        console.log(menuData);
        setData(menuData.menu);
      })
      .catch(err => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div>
      <NavBarComponent />
      <Banner />
      
      {data ? (
        <>
          <Deals items={data} />
          <Burgers items={data} />
        </>
      ) : (
        <>
          <LoadingItemList />
          <LoadingItemList />
        </>
      )}
    </div>
  );
}

export default App;
