import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useCartContext } from "../../context/CartContext.js";
import {useDarkModeContext} from "../../context/DarkModeContext.js"

export const ItemDetail = ({item}) => {

    const {darkMode} = useDarkModeContext()
    const {addItem} = useCartContext ()
    const onAdd = (contador) => {
       addItem (item,contador)
    }

   return (
         
            <div className={"row g-0" + (darkMode ? "cardBodyDarkMode" : "cardBody")}>
              <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded mx-auto d-block"/>
              </div>
              <div className="col-md-8 cardDetail cardd">
               <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Duración: {item.duracion}</p>
                <p className="card-text">Precio: ${item.precio}</p>
                <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
               </div>
              </div>
            </div>

       
   )
}