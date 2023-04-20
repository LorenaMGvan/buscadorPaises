import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';
// uso el type porque se que no va a expanderse, a diferencia de las interfaces
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  public selectedRegion?: Region;

  constructor(private _countriesService: CountriesService) {
  }

  searchByRegion( termino: Region): void {
    this.selectedRegion = termino;
    
    this._countriesService.searchRegion(termino)
      .subscribe( (countries: Country[]) => {
        this.countries = countries;
        console.log(countries);
      })
    // console.log({ termino });
  }

}
