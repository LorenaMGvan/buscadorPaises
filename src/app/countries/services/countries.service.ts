import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }
  
  searchCapital( terminoCapital: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${terminoCapital}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( error => {
        console.log(error);
        return of([])
      })
    )
    // .pipe(
    //   tap( countries => console.log('tap1', countries)),
    //   map( coutries => [] ),
    //   tap( countries => console.log('Tap 2', countries)),
    // )
  }


  searchCountry( termPais: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${termPais}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( error => {
        console.log(error);
        return of([])
      }))
  }

  searchRegion(termRegion: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${termRegion}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( error => {
        console.log(error);
        return of([])
      }))
  }

}