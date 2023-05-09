import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Spinner } from './Spinner'

import formatPrice from '../util/utility'
import './ProductDetail.scss'
import {Item} from '../interfaces/Detail'
import { BreadCrumb } from './BreadCrumb'
import { ProductDetailDescription } from './ProductDetailDescription'
import { Helmet } from 'react-helmet'
import { NotProductFound } from './NotProductFound'
import { ErrorPage } from './ErrorPage'

export const ProductDetail : React.FC = () => {

  const [loading, setloading] = useState<boolean>(true);
  const [errorApi, seterrorApi] = useState<string>('');
  const [productDetail, setproductDetail] = useState<Item | null >();
  const {idItem} = useParams();

  useEffect(() => {
    const dataFech = async()=>{
      try{
      setloading(true);
      const data = await fetch(`http://localhost:5000/api/items/${idItem}`);
      const json = await data.json();
      setloading(false);
      json.error?setproductDetail(json.data):setproductDetail(json.data.item);
      }catch (error){
        setloading(false);
        seterrorApi('Error Fetch')
        console.log(error)
      }
    }
    dataFech();  
  }, [idItem])
  
  if (loading){
    return  (<Spinner/>)
  } 
 
  if (errorApi !== ''){
    return <ErrorPage/> 
  }

  if  (!productDetail){
    return <NotProductFound/>
  }

  return (
      <div className='container'>            
        <BreadCrumb bread={productDetail.categories}/>          
      <div className='product-detail bg-white p-1'>
      {
        <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>{productDetail.title} | Mercado Libre</title>
                <link rel="canonical" href="https://mercadolibre.com.ar/" />
                <meta name="description" content="Detalle de un producto buscado" />
          </Helmet>
        <div className='detail'>
          <img  className='img-fluid' src={productDetail.picture} alt={productDetail.title}/>
          <div className="product-detail">
            <div className='product-detail-info'>
              <p className='product-detail-info-title'>{productDetail.condition === "new" ? "Nuevo - " : "Usado - "}{productDetail.sold_quantity + " vendidos"}</p>
              <p className='product-detail-info-title'><strong>{productDetail.title}</strong></p>
              <span className='price product-detail-info-price'>
                {formatPrice(parseInt(productDetail.price.amount),"es-AR" ,productDetail.price.currency,productDetail.price.decimals)}
                <span className='decimal'>
                  {(parseInt(productDetail.price.decimals) < 2)?productDetail.price.decimals +"0":productDetail.price.decimals } 
                </span>
              </span>  
              <button className='btncomprar'>Comprar</button>
            </div>
          </div>
        </div> 
        {<ProductDetailDescription description={productDetail.description}/>}
        </>
      }
      </div>
    </div>
  )
}
export default ProductDetail;