import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FullCalendarComponent } from './fullcalendar/full-calendar.component';
import { MapaComponent } from './mapa/mapa.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ListProductsComponent } from "./components/list-products/list-products.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FullCalendarComponent, MapaComponent, GraficosComponent, CommonModule, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint8';
 
}
