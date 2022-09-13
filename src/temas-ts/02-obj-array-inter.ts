


let nombres:string[]=['mario','dario','juan'];

console.log(nombres);

let datos:(boolean|number|string)[]=['Mario',23,true,'lopez'];

console.log(datos);
datos.push(200);
datos.push('Maria'); //push sirve para agregar datos a una lista
datos.push(false);
console.log(datos);
//-------------------------------------
//otra forma de crear arreglos
let arreglo : Array<number>=[1,2,3,4]

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]  //El ? es para indicar que el valor no es obligatorio
}
const alumno:Alumno={
    matricula:'dario',
    nombre:'lopez',
    edad:23,
    email:'gmail.com',
    materias:['ingles']
}
    
