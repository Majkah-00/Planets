import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { map } from 'rxjs/operators';
import { Starship } from '../../domain/models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  readonly endpoints = {
    getStarships: 'https://swapi.dev/api/starships',
  };

  constructor(private http: HttpClient) {
  }

  getStarships(): Observable<ApiResponse<Starship>> {
    // zamiast any zrob nowy model "ApiPlanetResponse i daj te nazwy z _"
    return this.http.get<ApiResponse<any>>(this.endpoints.getStarships).pipe(
      map(response => {
          return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map(starship => {
              return {
                ...starship,
              };
            })
          };
        }
      ));
  }

  getStarship(id): Observable<ApiResponse<Starship>> {
    // zamiast any zrob nowy model "ApiPlanetResponse i daj te nazwy z _"
    return this.http.get<any>(`https://swapi.dev/api/starships/${id}`).pipe(
      map(response => {
        return {
          ...response,
        };
      })
    );
  }
}
