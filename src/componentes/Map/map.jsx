
const map = () => {

    const productos = [
        { id: 1, nombre: "PcGamer", precio: 1000 },
        { id: 2, nombre: "Teclado Gamer", precio: 150 },
        { id: 3, nombre: "Mouse Gamer", precio: 100 },
        { id: 4, nombre: "Silla Gamer", precio: 400 },
    ]




    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {productos.map((producto)=>(
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <span>{producto.precio}</span>
                    </li>
                )
                
                )}
            </ul>
        </div>
    )
}

export default map