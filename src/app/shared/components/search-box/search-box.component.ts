import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public textSearch: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emiteValor( value: string): void {
    this.onValue.emit( value );
  }
}
