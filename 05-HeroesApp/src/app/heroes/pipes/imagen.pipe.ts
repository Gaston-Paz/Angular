import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
    name:'imagen'
})
export class ImagenPipe implements PipeTransform{
    
    transform(heroe: Heroes) {
        return (heroe.id != undefined) ? ("assets/heroes/" + heroe.id + ".jpg")  : "assets/no-image.png";
    }

    

}