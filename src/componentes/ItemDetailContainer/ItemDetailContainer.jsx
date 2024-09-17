import { useState, useEffect } from "react"
import { callProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        callProduct(4)
            .then(respuesta => setProducto(respuesta))
    }, [])



    return (
        <div>
<ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer