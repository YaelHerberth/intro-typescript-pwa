//Manejo de funciones

function sumar(a:number,b:number,c:number=0){

    console.log(a+b+c)

}

console.log(sumar(5,3,7))

function multiplicar(numero:number, otronumero?:number, base:number=2):number{
    return numero*base;
}

const resultado = multiplicar(5,10,4);
console.log(resultado);

interface Alumno2{
    nombre:string;
    edad:number;
    muestraEdad:()=>void;
}

function cursar(alumno:Alumno2, nuevaEdad:number):void{
    alumno.edad+=nuevaEdad;
    console.log(alumno);
}

const nuevoAlumno:Alumno2={
    nombre:'Mario',
    edad:23,
    muestraEdad() {
        console.log('Edad de Alumnos: ',this.edad)
    },
}
console.log(nuevoAlumno,28)