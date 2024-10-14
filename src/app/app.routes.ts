import { Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component'; 
import { ListProductsComponent } from './frontend/list-products/list-products.component';
import { AddEditproductComponent } from './frontend/add-editproduct/add-editproduct.component';
import { FullCalendarComponent } from './frontend/fullcalendar/full-calendar.component';
import { GraficosComponent } from './frontend/graficos/graficos.component';
import { MapaComponent } from './frontend/mapa/mapa.component';

export const routes: Routes = [
    { path: '', component: ListProductsComponent },
    { path: 'add', component: AddEditproductComponent },
    { path: 'edit/:id', component: AddEditproductComponent },
    { path: 'delete/:id', component: AddEditproductComponent },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: FullCalendarComponent },
    { path: 'addEvent', component: FullCalendarComponent },
    { path: 'graficos', component: GraficosComponent },
    { path: 'mapa', component: MapaComponent },
    { path: '**', redirectTo: '', pathMatch: "full" },
];
