import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

// Módulos
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './frontend/navbar/navbar.component'; 
import { ListProductsComponent } from './frontend/list-products/list-products.component';
import { FullCalendarComponent } from "./frontend/fullcalendar/full-calendar.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent,  CommonModule, ListProductsComponent,
    ReactiveFormsModule, FullCalendarModule, FullCalendarComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sprint8';
}
