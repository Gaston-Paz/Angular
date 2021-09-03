import { Producto, calculaISV } from "./06-desestructuracion-funcion";
 


 
const carrito: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'telefono2',
        precio: 200
    }
];

const [total, isv] = calculaISV(carrito);

console.log('Total ', total);
console.log('ISV ', isv);


