import React, { createContext, useEffect, useState } from 'react'


export  const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) ??[])
    function addToBasket(item) {
        let findedId = basket.find(x=>x.item.id==item.id)
        console.log(findedId);
        if (!findedId) {
        setBasket([...basket,{item,count:1}])
            return
        }
        findedId.count++
        localStorage.setItem("basket",JSON.stringify(basket))
        
    }

function decrement (item) {
    console.log('clicked');
    let findedId = basket.find(x=>x.item.id==item.id)
    console.log(findedId);
    findedId.count--
    localStorage.setItem("basket",JSON.stringify(basket))

    
}


   useEffect(() => {
  localStorage.setItem("basket",JSON.stringify(basket))
   }, [basket])

  return <BasketContext.Provider value={{basket,setBasket,addToBasket,decrement}}> {children}</BasketContext.Provider>
}

export default BasketProvider
