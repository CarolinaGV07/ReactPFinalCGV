import cart2 from './assets/cart2.svg'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext.js'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const {getItemQuantity} = useCartContext ()

  return (
    <>
        <button className='cartButton'>
          <Link to={'/cart'} className='nav-link'>
            <img className= 'svgImg' src={cart2} alt="cart-widget" />
            {getItemQuantity() > 0 && <span className='cantCart'>{getItemQuantity()}</span>} 
          </Link>

        </button>
    </>

  )
}



