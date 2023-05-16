import { useCartContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList.jsx"


export const Cart = () => {

  const {cart,totalPrice,emptyCart} = useCartContext()
   return (
     <>
          {
            cart.length === 0 
            ?
            <>
              <h1>No hay productos en el carrito</h1>
              <button className="btn btn-secondary"><Link to={"/"} className= "nav-link">Comprar más!</Link></button>
            </>
            :
            <div className="container cartDivCont">
              {<ItemList productos={cart} plantilla={"ItemCart"}/>}
              <div>
                <p>Total de la compra: ${totalPrice()}</p>
                <button className="btn btn-danger buttonSpace" onClick={()=> emptyCart()}>Vaciar carrito</button>
                <Link className="nav-link" to={"/"}><button className="btn btn-secondary buttonSpace">Comprar mas!</button></Link>
                <Link className="nav-link" to={"/checkout"}><button className="btn btn-secondary buttonSpace">Finalizar compra</button></Link>
              </div>
            </div>
          }
     </>
 
   )

  }
