import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Banner from './components/Banner';
import { useEffect, useState } from 'react';
import Deals from './components/Deals';
import LoadingItemList from './components/LoadingItemList';
import ItemsList from './components/ItemsList';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://demo4946018.mockable.io/chelos-burger')
      .then(response => response.json())
      .then(menuData => {
        console.log(menuData);
        setData(menuData.menu);
      })
      .catch(err => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div>
      <NavBarComponent items={data}/>
      <Banner />
      
      {data ? (
        <>
          <Deals items={data} />
          <ItemsList title={'Burgers'} items={data.Burgers} />
          <ItemsList title={'Saladas'} items={data.Saladas} />
          <ItemsList title={'Aperitivos'} items={data.Aperitivos} />
          <ItemsList title={'Sobremesas'} items={data.Sobremesas} />
          <ItemsList title={'Bebidas'} items={data.Bebidas} />
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
