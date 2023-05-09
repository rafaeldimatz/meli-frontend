import React from 'react'
import './BreadCrumb.scss'

interface Props{
  bread:string[];
}

export const BreadCrumb : React.FC<Props> = ({bread}) => {
  return ( 
    <div className="container-breadcrumb">
      {bread.map((item,index)=>(
            <span key={index}>&nbsp;{item}{index !== bread.length - 1 ? ' - ' : ''}</span>
      )
      )}
    </div>
  )
}
