interface Direccion{
    calle:string,
    pais:string,
    estado:string,
}

interface AlumnosDatos{
    nombre:string,
    edad:number,
    direccion:Direccion;
    mostrarDireccion:()=>void
}

const AlumnoUTL:AlumnosDatos={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO',
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}
const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);