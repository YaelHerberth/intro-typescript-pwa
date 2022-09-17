
import { calcularIVA2, Producto } from "./05-desestructura-funcion";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:1234
    },
    {
        desc:'Tablet1',
        precio:2345
    },
    {
        desc:'Telefono2',
        precio:2222
    },
          
];
const [total1, iva1]=calcularIVA2(tiendaProductos);
console.log (`Total: ${total1} \n IVA: ${iva1}`)