import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  // esto es lo mismo que la linea de abajo
  // private debounceX: Subject<string> = new Subject<string>(); 
  // el subject es un tipo especial de observable
  private debounceX = new Subject<string>;
  private debounceXSuscription?: Subscription;

  @Input()
  public textSearch: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  /*
  El observable  debounce emite un valor
  llega al pipe
  el pipe tiene un operador debouceTime
   EL debounce dice me tengo que esperar x tiempo para ver si no recibo mas valores
   Si recibo otro valor, debo volver a esperar ux tiempo y no emito nada
   Hasta que deje de emitir  ya mando valor
  */

   ngOnInit(): void {
    this.debounceXSuscription = this.debounceX
    .pipe(
      // primer argumento, cuanto tiempo queier esperar para hacer la siguiene emision
      //  el segundo, cuando quiero ejecutar esa emision
      debounceTime(300)
    )
    .subscribe( value => {
      console.log('debouncevalue',value);
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    console.log('destruidoo');
    this.debounceXSuscription?.unsubscribe(); 
    // this.onDebounce.unsubscribe();
  }

  emiteValor( value: string): void {
    this.onValue.emit( value );
  }
  
  onKeyPress(searchTerm: string) {
    this.debounceX.next( searchTerm );
    // delego el  console log, o lo que coloco en este onKeyORess  al debouncerX
    // console.log('presionando', searchTerm);
  }

}
