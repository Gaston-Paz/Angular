//Video 18

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheera',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles: {autor,anio} } = reproductor;
//const { autor, anio } = detalles;

// console.log('El volumen actual es: ' + volumen);
// console.log('El segundo actual es: ' + segundo);
// console.log('La canción actual es: ' + cancion);
// console.log('El autor: ' + autor);
// console.log('El año es: ' + anio);

const dbz: string [] = ['Goku','Vegeta','Trunks'];

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

const [posicion1, posicion2, posicion3] = dbz;
//const[,,p3] = dbz;

console.log('Personaje 1:', posicion1);
console.log('Personaje 2:', posicion2);
console.log('Personaje 3:', posicion3);