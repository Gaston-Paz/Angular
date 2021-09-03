//Video 15 y 16

function sumar(a,b){
    return a + b;
}

let resultado = sumar('Gastón ','Paz');
console.log(resultado);
resultado = sumar(2,3);
console.log(resultado);

function sumarlo(a: number,b: number){
    return (a + b).toString();
}

resultado = sumarlo(1,2);
console.log(resultado);

function sumarle(a: number,b: number): number{
    return (a + b);
}

resultado = sumarle(4,2);
console.log(resultado);

const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

resultado = multiplicar(5,10);
console.log(resultado);

resultado = multiplicar(5,10, 4);
console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHp:() => void;
}


function curar (personaje: PersonajeLOR, curar: number): void{

    personaje.hp += curar;

    console.log(personaje);
}

const nuevo: PersonajeLOR = {
    nombre: 'Sapo Pepe',
    hp: 50,
    mostrarHp(){
        console.log("Puntos de vida " + this.hp);
    }
}

curar(nuevo, 25);
nuevo.mostrarHp();