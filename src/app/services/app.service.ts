import { CreatureType } from './../models/atlas/creature-type.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = `assets/creature-data.json`;

  constructor(private http: HttpClient) { }

  private data() {
    return this.http.get<CreatureType[]>(`${this.baseUrl}`);
  }

  types() {
    return this.data();
  }
}
