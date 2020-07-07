import { CreatureType } from './../models/atlas/creature-type.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, first, take, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = `assets/creature-data.json`;

  constructor(private http: HttpClient) { }

  private data() {
    return this.http.get<CreatureType[]>(`${this.baseUrl}`);
  }

  types() : Observable<CreatureType[]> {
    return this.data();
  }

  type(id: number) : Observable<CreatureType> {
    return this.data()
      .pipe(
        map(results => results.filter(x => x.id === id)[0])
      );
  }
}
