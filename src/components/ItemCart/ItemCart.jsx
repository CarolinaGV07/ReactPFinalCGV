import { useCartContext } from "../../context/CartContext.js"
import trash3 from './assets/trash3.svg'
import { useDarkModeContext } from "../../context/DarkModeContext.js"

export const ItemCart = ({item}) => {

   const {darkMode} = useDarkModeContext()
    const {removeItem} = useCartContext()

   return (

          <div className={"card mb-3 itemCart" + (darkMode ? "cardBodyDarkMode" : "cardBody")}>
             <div className="row g-0">
               <div className="col-md-4">
                 <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
               </div>
               <div className="col-md-8">
                 <div className="card-body">
                   <h5 className="card-title">{item.nombre}</h5>
                   <p className="card-text">Cantidad:{item.quantity}</p>
                   <p className="card-text">Precio unitario: ${item.precio}</p>
                   <p className="card-text">Subtotal: ${item.precio * item.quantity}</p>
                   <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                    <img className= 'svgImg' src={trash3} alt="Imagen de tacho de basura" />
                   </button>
                 </div>
               </div>
             </div>
           </div>
        
          
   )
}