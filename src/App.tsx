import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import ProductDetail from './component/ProductDetail'
import Search from './component/Search'
import ProductList from './component/ProductList'
import { ErrorPage } from './component/ErrorPage'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <Search/>
        <Routes>
          <Route path='/'/>
          <Route path='/items/:idItem'  element={<ProductDetail/>}/>
          <Route path='/items' element={<ProductList/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;
