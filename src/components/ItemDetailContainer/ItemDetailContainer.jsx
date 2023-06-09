import { useState, useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../firebase/firebase.js"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState ([])
    const {id} = useParams ()

    useEffect ( () => {
        getProduct(id).then (prod => setItem (prod))
        
    }, [id])

   return (

    <div className="card mb-3 container itemDetail">
        < ItemDetail item= {item}/>
    </div>

   )
}