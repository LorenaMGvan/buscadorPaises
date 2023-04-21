import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  // public get countriesService(): CountriesService {
  //   return this._countriesService;
  // }
  // public set countriesService(value: CountriesService) {
  //   this._countriesService = value;
  // }

  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private _countriesService: CountriesService) {
  }
  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byCountries.countries;
    this.initialValue = this._countriesService.cacheStore.byCountries.term;
  }

  searchByPais( termino: string): void {
    this._countriesService.searchCountry(termino)
      .subscribe( countries => {
        this.countries = countries;
        console.log('buscando..');
        console.log(countries);
      })
    // console.log({ termino });
  }
}
