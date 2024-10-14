import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Chart } from '../interfaces/chart';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/charts/';
  }

  getChart(name: string): Observable<Chart> {
    return this.http.get<Chart>(`${this.myAppUrl}${this.myApiUrl}${name}`);
  }
}
