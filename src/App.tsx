import { lazy, Suspense } from "react";
import Loadable from 'react-loadable'
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./scss/app.scss";


const Cart = Loadable({
  loader: () => import (/*webpackChunkName: "Cart"*/'./pages/Cart'),
  loading: () =>  <h2>Cart Loading...</h2>
})



const FullPizza  = lazy(() => import (/*webpackChunkName: "FullPizza"*/'./pages/FullPizza'))
const NotFound = lazy(() => import (/*webpackChunkName: "NotFound"*/'./pages/NotFound'));


function App () {
  return ( 
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />}/>
          <Route path="pizza/:id" element={<Suspense fallback={<h2>FullPizza Loading...</h2>}>
            <FullPizza />
          </Suspense>} />
          <Route path="*" element={<Suspense fallback={<h2>NotFound Loading...</h2>}>
            <NotFound  />
          </Suspense>} />
        </Route>
      </Routes>

  );
}

export default App;
