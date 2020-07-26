import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

import axios from 'axios';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${name}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [name])

  return (
    <>
      <Header />
      <Search getQuery={(name) => setName(name)} />
      <Characters isLoading={isLoading} items={items} />
      <Footer />
    </>
  );
}

export default App;
