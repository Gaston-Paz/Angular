import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string = '';
  
  deBouncer: Subject<string> = new Subject();
  termino: string = '';

  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino);
    console.log('input');
  }

  teclaPresionada(){
      this.deBouncer.next(this.termino);
  }

  ngOnInit(): void {
    this.deBouncer.pipe(debounceTime(300))
    .subscribe(valor => {
      console.log(valor);
      this.onDebounce.emit(valor);
    });

  }

}
