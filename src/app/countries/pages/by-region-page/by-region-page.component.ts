import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

// type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';
// uso el type porque se que no va a expanderse, a diferencia de las interfaces
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  public selectedRegion?: Region;

  constructor(private _countriesService: CountriesService) {
  }
  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegion.region;
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
