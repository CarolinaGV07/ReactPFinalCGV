import { useRef } from "react"
import './Checkout.css'
import { useCartContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"
import { createOrdenCompra,getProduct,updateProduct } from "../../firebase/firebase.js"
import { useNavigate } from "react-router-dom"
import {toast} from "react-toastify"

export const Checkout = () => {

    const datosFormu = useRef()
    const {cart,totalPrice,emptyCart}=useCartContext()

    //Devolucion de localizacion actual
    let navigate = useNavigate()

    const consulFormu = (e) => {
        e.preventDefault()
        //Consulta de datos del formulario
        const datFormul = new FormData (datosFormu.current)
        const usuario = Object.fromEntries (datFormul)

        //Validacion para comparar emails del formulario
        const email1 = usuario.email1;
        const email2 = usuario.email2;
        
        if (email1 !== email2) {
            toast.error(`Los campos de email son distintos. Por favor coloque la misma dirección de email en ambos.`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return false;
          }

        //Copia del carrito
        const aux = [...cart]

        //Descuento de stock
        aux.forEach(prodCart =>{
            getProduct(prodCart.id).then(prodBdd =>{
                if(prodBdd.stock >= prodCart.quantity){
                    prodBdd.stock -= prodCart.quantity
                    updateProduct(prodBdd.id,prodBdd)
                }else{
                    toast.error(`El stock es menor a la cantidad requerida para la compra`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                } 
            }) 
        })


        const aux2 = aux.map (prod => ({id:prod.id,quantity:prod.quantity,precio:prod.precio}));

        createOrdenCompra(usuario,totalPrice(),aux2,new Date().toLocaleString('es-AR',{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}))
        .then(ordenCompra =>{

            toast(`🛍️ Muchas gracias por su compra! Su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}. A la brevedad nos contactaremos para otorgarle su turno.`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                      //Vaciado del carrito
        emptyCart()
        //Reseteo de formulario
        e.target.reset()
        //Redireccionamiento
        navigate("/")

        })
        .catch (error =>{
            console.error (error)
        })

    }

   return (
    <>
    {
        cart.length === 0
        ?
        <>
           <h2>Si desea finalizar compra, debe haber productos en el carrito</h2>
           <Link className="nav-link" to={"/"}><button className="btn btn-secondary">Comprar mas!</button></Link>
        </>
        :
        <div className="container formuDiv">
        <form onSubmit={consulFormu} ref={datosFormu}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                <input type="text" className="form-control" name="nombre" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email1" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Repetir Email</label>
                <input type="email" className="form-control" name="email2" required />
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="number" className="form-control" name="dni" required />
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Número telefónico</label>
                <input type="number" className="form-control" name="celular" required />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" name="direccion" required />
            </div>
            <button type="submit" className="btn btn-secondary">Finalizar Compra</button>
        </form> 
        </div>
    }
    </>
   )
}