import { Link } from "react-router-dom"
import { memo } from "react"

export const Categorias = memo (() => {
   return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
            <button className='btn btn-secondary'>Inicio</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/AtencionManual"}>
            <button className='btn btn-secondary'>Atención manual</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/Aparatologia"}>
            <button className='btn btn-secondary'>Aparatología</button>
        </Link>
      </li>
    
    </ul>
    )
})