

const Promesas = () => {

    //Programacion Sincronica

    // console.log("tarea1")
    // console.log("TAREA2")

    //Programacion Asincronica

    // setTimeout(() => {
    //     console.log("Hola, he demorado 3 segundos")
    // }, 3000);

    // setTimeout(() => {
    //     console.log("Hola demoraste mucho")
    // }, 1500);

    //Promesas
    //Un evento que puede ocurrir o no. 
    //Si se resuelve da un resultado, si no se resuelve da otro.
    //Las promesas tienen 3 estados: pendiente, cumplida o incumplida.


    const falsasPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("Promesa cumplida")}
            else {
                reject("Promesa Incumplida")
            }
        })
}


console.log(falsasPromesas(false))


//Then y Catch
//Dos metodos, THEN ejecuta cuando la promesa se cumple
//CATCH se ejecuta cuando la promesa se rechaza
//FINALLY se ejecuta siempre

falsasPromesas(true)
.then((respuesta)=>{
    console.log("Si se cumplio la promesa" + respuesta)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log("Proceso finalizado"))



return (
    <div>Promesas</div>
)
}

export default Promesas