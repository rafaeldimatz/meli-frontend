const formatPrice = (price,en,tipovalor,decimal)=>{
  return price.toLocaleString(en, {
    style: "currency",
    currency: tipovalor,
    maximumFractionDigits: 0,
  });

}


export default formatPrice;

