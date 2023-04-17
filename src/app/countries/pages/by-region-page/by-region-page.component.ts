import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) {
  }

  searchByRegion( termino: string): void {
    this._countriesService.searchCountry(termino)
      .subscribe( (countries: Country[]) => {
        this.countries = countries;
        console.log(countries);
      })
    // console.log({ termino });
  }

}
