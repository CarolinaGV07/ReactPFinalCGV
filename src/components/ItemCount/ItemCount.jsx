import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({ValInicial, min, max, onAdd}) => {

  const {count, minus, sum, reset} = useCount (ValInicial, min, max)

  return (
     <div>
          <button className="btn btn-secondary itemCountButtons" onClick= { minus }>-</button>
          {count}
          <button className="btn btn-secondary itemCountButtons" onClick= { sum }>+</button>
          <button className="btn btn-secondary itemCountButtons" onClick= { reset }>Reset</button>
          <button className="btn btn-light border border-secondary itemCountButtons" onClick= {() => onAdd (count) }>Agregar al carrito</button>
     </div>
   )
}