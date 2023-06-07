import '../styles/App.css';
import data from "../services/data.json"
import Listproduct from "./ListProduct/ListProduct";
import { useState } from 'react';
import Filter from "./Filter/Filter";


function App() {
  const [products] = useState(data);
  const [filterName, setFilterName] = useState('');


  const handleFilterName = (value) => {
      setFilterName(value);
  };
  const filteredProducts = products.filter((item) => 
    item.nombre.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <div className="App">
      <Filter handleFilter={handleFilterName}/>
      <Listproduct list={filteredProducts}/>
    </div>
  );
}

export default App;
