const bigShopProductos = [  
    { id: 1, nombre: "Smartphone XYZ", precio: 45000, img: "/public/img/producto.jpg" },  
    { id: 2, nombre: "Laptop ABC", precio: 95000, img: "/public/img/producto.jpg" },  
    { id: 3, nombre: "Tablet DEF", precio: 30000, img: "/public/img/producto.jpg" },  
    { id: 4, nombre: "Auriculares inalámbricos", precio: 7500, img: "/public/img/producto.jpg" },  
    { id: 5, nombre: "Reloj inteligente GHI", precio: 27000, img: "/public/img/producto.jpg" },  
    { id: 6, nombre: "Televisor LED 50", precio: 120000, img: "/public/img/producto.jpg" },  
    { id: 7, nombre: "Parlante Bluetooth", precio: 15000, img: "/public/img/producto.jpg" },  
    { id: 8, nombre: "Cámara de seguridad", precio: 20000, img: "/public/img/producto.jpg" }  
];  


export const getProducts=()=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(bigShopProductos)
        }, 2000);
    })
}