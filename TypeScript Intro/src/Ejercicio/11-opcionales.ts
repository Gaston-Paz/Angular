

interface Pasajero{
    nombre: string;
    hijos?: string[];
}


const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia','Gabriel']
}

function imprimirHijos(pasajero: Pasajero): void{
    
    // const cuantosHijos = pasajero.hijos?.length === undefined ? 0: pasajero.hijos.length;
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);