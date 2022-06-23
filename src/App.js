import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import {increment} from './redux/slices/filterSlice'
import {useDispatch,useSelector} from 'react-redux';


export const SearchContext = createContext('');


function App() {
  const [searchValue, setSearchValue] = useState('');
  const data = useSelector( state => state)
  const discpatch = useDispatch();

  return (
    <div className="app">
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
     <div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      </div>
     </SearchContext.Provider>
    </div>
  );
}


export default App;
