

class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    // alterego: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string, 
        public nombreReal: string,
        public edad: number
    ){
        super(nombreReal, 'New York');
    }

    GetNombre(){
        return this.nombreReal;
    }
    GetAlterEgo(){
        return this.alterEgo;
    }
    GetEdad(){
        return this.edad;
    }


}

const ironman = new Heroe('Iron Man','Tony Stark', 40);
console.log(ironman);
