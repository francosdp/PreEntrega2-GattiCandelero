import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map(item =><Item {...item}/>)}
    </>
  )
}

export default ItemList