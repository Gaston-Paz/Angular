import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayuscula'
})
export class MayusculasPipe implements PipeTransform{

    transform(termino: string, mayus: boolean = true): string {
        return (mayus) ? termino.toUpperCase() : termino.toLowerCase();
    }

}