import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { Person } from '../../domain/models/person.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  readonly endpoints = {
    getPeople: 'https://swapi.dev/api/people'
  };

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<ApiResponse<Person>> {
    return this.http.get<ApiResponse<any>>(this.endpoints.getPeople).pipe(
      map(response => {
        return {
          count: response.count,
          next: response.next,
          previous: response.previous,
          results: response.results.map(person => {
            return {
              ...person,
            };
          })
        };
      })
    );
  }

  getPerson(id): Observable<ApiResponse<Person>> {
    return this.http.get<any>(`https://swapi.dev/api/people/${id}`).pipe(
      map(response => {
        return {
          ...response
        };
      })
    );
  }
}
