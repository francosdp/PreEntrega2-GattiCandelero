import { Link } from "react-router-dom"



const Item = ({id,nombre,precio,img}) => {
  return (
    <div>

<img src={img} alt={nombre} />
<h3>Nombre: {nombre}</h3>
<p>Precio: {precio}</p>
<p>ID: {id}</p>
<Link to={`/item/${id}`}><button>Ver más</button></Link>

</div>
  )
}

export default Item