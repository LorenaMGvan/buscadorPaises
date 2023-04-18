import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor ( private activatedRoute: ActivatedRoute, 
                private countriesService: CountriesService,
                private router: Router){

  }

  // http://localhost:4200/countries/by/MX
  ngOnInit(): void {
    this.activatedRoute.params

      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) ),
        )
      .subscribe( (country) => {  

        if( !country )  return this.router.navigateByUrl('');
        
        console.log('Hay un país');
        this.country = country;
        return;
      })
      
  }

  // searchCountry( code: string ) {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //   .subscribe( country=> {
  //     console.log({ country });
  //   });
  // }

  // public countries: Country[] = [];

  // constructor(private _countriesService: CountriesService) {
  // }

  // searchByPais( termino: string): void {
  //   this._countriesService.searchRegion(termino)
  //     .subscribe( countries => {
  //       this.countries = countries;
  //       console.log(countries);
  //     })
  //   // console.log({ termino });
  // }
}