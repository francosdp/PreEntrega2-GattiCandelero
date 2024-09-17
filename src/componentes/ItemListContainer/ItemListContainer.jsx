import { useState } from "react"
import { useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        getProducts()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))



    }, [])




return (
    <>
    <h2 style={{textAling:"center", color:"red"}}>Productos</h2>
    <ItemList productos={productos}/>
    </>
)
}

export default ItemListContainer