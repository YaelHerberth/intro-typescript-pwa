
interface Detalles{
    autor:string;
    year:number;
}

interface Reproductor {
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volume:90,
    segundo:66,
    cancion:'Mananitas',
    detalles:{
        autor:'cepillin',
        year:1999
    }
}

const{volume,segundo,cancion,detalles}=reproductor;

const{autor}=detalles;

console.log(`El volumen actual es : ${volume}`);
console.log(`El segundo actual es : ${segundo}`);
console.log(`La cancion actual es : ${cancion}`);
console.log(`El autor actual es : ${detalles.autor}`);

const dbz:string[]=['Goku','Vegeta','Yamcha','Trunks'];
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);

const[p1,p2,p3,p4]=dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);