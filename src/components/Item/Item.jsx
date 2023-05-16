import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({item}) => {
   return (
      <div className="col d-grid gap-3 container text-center">
      <div className="col-sm my-3 border border-2 border border-black">
      <div className="card rounded mx-auto d-block" style={{ width: '18rem' }}>
         <img src={item.img} className="card-img-top img-fluid imgcard" alt={`Imagen de ${item.nombre}`} style={{height: '300px'}}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">Precio: ${item.precio}</p>
        <p className="card-text">Duracion: {item.duracion}</p>
        <p className="card-text">Stock: {item.stock}</p>
        <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-secondary">Ver Tratamiento</button></Link>
      </div>
      </div>
  </div>
   )
}