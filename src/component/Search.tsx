import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import {RiSearchLine} from 'react-icons/ri'

import './Search.scss'
import logo from '../assets/Logo_ML.png'
import { Helmet } from 'react-helmet'

interface Props {}

export const Search : React.FC<Props> = () => {
  const navigation = useNavigate();
  const [searchWord, setsearchWord] = useState<string>('')

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setsearchWord(e.target.value)
  }
  const handleSearch=(e:React.MouseEvent<HTMLSpanElement, MouseEvent> |  React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    navigation({ pathname: "/items", search: `?search=${searchWord}` });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search | Mercado Libre</title>
        <link rel="canonical" href="https://mercadolibre.com.ar/" />
      </Helmet>
    <section className="header">
      <div className='container'>
        <div className='navbar'>
        <img src={logo} alt="MercadoLibre"/>
        <div className="navbar-search">
        <form onSubmit={(e)=>handleSearch(e)}> 
          <input type="text" placeholder="Nunca dejes de buscar" data-testid="inputsearch" autoFocus onChange={(e)=>handleChange(e)} />
          <span className='lupa' data-testid="lupa" onClick={(e)=>handleSearch(e)}><RiSearchLine size={20} style={{color:'gray'}}/></span>
          </form>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Search;
