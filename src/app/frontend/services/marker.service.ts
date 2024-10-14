import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Marker } from '../interfaces/marker';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/markers/';
  }

  getMarkers(): Observable<Marker[]> {
    return this.http.get<Marker[]>(`${this.myAppUrl}${this.myApiUrl}${name}`);
  }
}
