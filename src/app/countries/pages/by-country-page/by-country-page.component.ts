import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  // public get countriesService(): CountriesService {
  //   return this._countriesService;
  // }
  // public set countriesService(value: CountriesService) {
  //   this._countriesService = value;
  // }

  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) {
  }

  searchByPais( termino: string): void {
    this._countriesService.searchCountry(termino)
      .subscribe( countries => {
        this.countries = countries;
        console.log(countries);
      })
    // console.log({ termino });
  }
}
