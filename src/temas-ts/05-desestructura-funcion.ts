//desestructuracion de objetos y arreglos

interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Noki',
    precio:2345
}
const tablet:Producto={
    desc:'iPad air',
    precio:25739,
}
function calculadoraIVA(productos:Producto[]):number{

    let total = 0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const IVAot=calculadoraIVA(articulos1);
console.log(`IVA: ${IVAot}`);

function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total,total*0.16];
}
const articulos2 = [telefono,tablet];
const[total,iva] = calcularIVA2(articulos2);
console.log(`Total : ${total} \n IVA: ${iva}`); // \n para salto de linea