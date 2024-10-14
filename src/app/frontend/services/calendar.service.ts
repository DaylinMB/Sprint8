import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { EventInput } from '@fullcalendar/core';
import { Calendar } from '../interfaces/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/calendar/';
  }

  getEvents(): Observable<EventInput[]> {
    return this.http.get<EventInput[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addEvent(event: Calendar): Observable<Calendar> {
    return this.http.post<Calendar>(`${this.myAppUrl}${this.myApiUrl}`, event);
  }
}
