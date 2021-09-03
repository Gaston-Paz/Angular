///Video 14

let todo = [1,'Gastón', true]; ///tipo any
//let habilidades = ['Bash','Counter',100]; ///string o number
///habilidades.push(true);
//habilidades.push(2);
let habilidades = ['Bash','Counter'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Ironman',
    hp: 100,
    habilidades: ['fenomeno','crack','vuela']
}

personaje.puebloNatal = 'Pueblo';

console.table(personaje);