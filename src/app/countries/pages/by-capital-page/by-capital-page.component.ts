import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByCapital( termino: string): void {
    this.countriesService.searchCapital(termino)
      .subscribe( countries => {
        this.countries = countries;
        console.log(countries);
      })
    // console.log({ termino });
  }
}
