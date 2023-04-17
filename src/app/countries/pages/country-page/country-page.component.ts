import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent {

  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) {
  }

  searchByPais( termino: string): void {
    this._countriesService.searchRegion(termino)
      .subscribe( countries => {
        this.countries = countries;
        console.log(countries);
      })
    // console.log({ termino });
  }
}