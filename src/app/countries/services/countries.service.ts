import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore = {
    byCapital:    { term: '', countries: [] }, 
    byCountries:  { term: '', countries: [] }, 
    byRegion:     { region: '', countries: [] },
  }

  constructor(private httpClient: HttpClient) {
   }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( () => of([]) ),
      delay( 2000 ), // no tarda 2 segundos en ejecutar el request, 
        // una vez emitido el valor del observable, va a tardar 2 segundos en que pase el dalay
    );
  }



  searchCountryByAlphaCode( code: string): Observable<Country | null>{
    const url = `${ this.apiUrl }/alpha/${code}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError( error => {
        console.log(error);
        return of(null)
      })
    )
  }
  
  searchCapital( terminoCapital: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${terminoCapital}`;
    return this.getCountriesRequest( url);
  }


  searchCountry( termPais: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${termPais}`;
    return this.getCountriesRequest( url);
  }

  searchRegion(termRegion: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${termRegion}`;
    return this.getCountriesRequest( url);
  }

}