import React, { useState,useEffect } from 'react'
import {useLocation,Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import formatPrice from '../util/utility'
import './ProductList.scss'
import { Spinner } from './Spinner';
import iProduct from '../interfaces/Producto'
import { NotProductFound } from './NotProductFound'
import { BreadCrumb } from './BreadCrumb'
import { ErrorPage } from './ErrorPage'

export const ProductList: React.FC = () => {
  const search = useLocation().search;
  const param = new URLSearchParams(search);
  const searchWord = param.get("search");
  const [loading, setloading] = useState<boolean>(true);
  const [errorApi, seterrorApi] = useState<string>('');
  const [productList, setproductList] = useState<iProduct | null>();
  useEffect(() => {
    const dataFech = async()=>{
    try{
      setloading(true);
      const data = await fetch(`http://localhost:5000/api/items?q=${searchWord}`);
      const json = await data.json();
      setloading(false);
      setproductList(json.data);
    }catch (error){
      setloading(false);
      console.log(error)
      seterrorApi('Error Fetch')
    }
    }
    dataFech();  
  }, [searchWord])

  if (loading){
    return <Spinner />
  }

  if (errorApi !== ''){
    return <ErrorPage/> 
  }

  if  (!productList){
    return <NotProductFound/>
  }

  return (
    <div className='container'>   
        <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>{searchWord} | Mercado Libre</title>
                <link rel="canonical" href="https://listado.mercadolibre.com.ar/termo" />
          </Helmet>
          
          <BreadCrumb bread={productList.categories}/>          
          
          <div className='list-products bg-white p-1'>
          {
            productList.items.map((item)=>{
                return(
                  <Link to={`/items/${item.id}`} className='product' key={item.id} >
                      <div className='product-image'>
                        <img className='img-fluid' src={item.picture} alt={item.title}/>
                      </div>
                      <div className='product-info'>
                        <div className='product-info-price'>
                          <span className='price'>
                            {formatPrice(parseInt(item.price.amount),"es-AR" ,item.price.currency,item.price.decimals)}
                            <span className='decimal'>
                              {(parseInt(item.price.decimals) < 2)?item.price.decimals +"0":item.price.decimals } 
                            </span>
                          </span>  
                        </div>
                        <p>{item.title}</p>
                        <p>{item.condition === "new" ? "Nuevo" : "Usado"}</p>
                      </div>
                      <div className='product-state'>
                        <p>{item.address.state_name}</p>
                      </div>
                  </Link>   
                )
              })
          }     
          </div>
        </>
       
   </div>
  )
}
export default ProductList;
