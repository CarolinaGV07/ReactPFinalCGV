//Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//Componentes
import { Navbar } from './Navbar/Navbar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { Checkout } from './Checkout/Checkout.jsx'
import { Cart } from './Cart/Cart'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Context
import { DarkModeProvider } from '../context/DarkModeContext.js'

//Firebase
//import { createProducts } from '../firebase/firebase.js'

//Libreria para alertas
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  //createProducts()

   return (
     <>
      <BrowserRouter>
      <DarkModeProvider>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>} />
          <Route path= '/category/:category' element= {<ItemListContainer/>} />
          <Route path= '/product/:id' element= {<ItemDetailContainer/>} />
          <Route path= '/checkout' element= {<Checkout/>} />
          <Route path= '/cart' element= {<Cart/>} /> 
          <Route path= '*' element= {<h1>404 Not Found</h1>}/> 
        </Routes>
      </DarkModeProvider>
      </BrowserRouter>
     </>
   )
}