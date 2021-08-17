import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../../domain/models/planet.model';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly endpoints = {
    getPlanets: 'https://swapi.dev/api/planets',
    getPeople: 'https://swapi.dev/api/people',
    getStarships: 'https://swapi.dev/api/starships',
  };

  constructor(private http: HttpClient) {
  }

  getPlanets(): Observable<ApiResponse<Planet>> {
    // zamiast any zrob nowy model "ApiPlanetResponse i daj te nazwy z _"
    return this.http.get<ApiResponse<any>>(this.endpoints.getPlanets).pipe(
      map(response => {
          return {
            count: response.count,
            next: response.next,
            previous: response.previous,
            results: response.results.map(planet => {
              return {
                ...planet,
                orbitalPeriod: planet.orbital_period,
                rotationPeriod: planet.rotation_period,
                surfaceWater: planet.surface_water,
              };
            })
          };
        }
      ));
  }

  getPlanet(id): Observable<ApiResponse<Planet>> {
    // zamiast any zrob nowy model "ApiPlanetResponse i daj te nazwy z _"
    return this.http.get<any>(`https://swapi.dev/api/planets/${id}`).pipe(
      map(response => {
        return {
          ...response,
          orbitalPeriod: response.orbital_period,
          rotationPeriod: response.rotation_period,
          surfaceWater: response.surface_water,
        };
      })
    );
  }
}
