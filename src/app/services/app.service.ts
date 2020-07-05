import { CreatureType } from './../models/atlas/creature-type.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = `https://exploreatlas.co.uk/api`;

  constructor(private http: HttpClient) { }

  types() {
    return this.http.get<CreatureType[]>(`${this.baseUrl}/calculators/creature-types`);
  }

  type(id: number) {
    return this.http.get<CreatureType>(`${this.baseUrl}/calculators/creature-types/${id}`);
  }
}
