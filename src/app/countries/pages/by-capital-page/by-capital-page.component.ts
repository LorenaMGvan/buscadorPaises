import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public initialValue:string = '';

  constructor(private countriesService: CountriesService) {
  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( termino: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(termino)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
      console.log(countries);
      })
    // console.log({ termino });
  }
}
