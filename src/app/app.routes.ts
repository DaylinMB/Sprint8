import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullCalendarComponent } from './fullcalendar/full-calendar.component';
import { GraficosComponent } from './graficos/graficos.component';
import { MapaComponent } from './mapa/mapa.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditproductComponent } from './components/add-editproduct/add-editproduct.component';

export const routes: Routes = [
    { path: '', component: ListProductsComponent },
    { path: 'add', component: AddEditproductComponent },
    { path: 'edit/:id', component: AddEditproductComponent },
    { path: 'delete/:id', component: AddEditproductComponent },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: FullCalendarComponent },
    { path: 'graficos', component: GraficosComponent },
    { path: 'mapa', component: MapaComponent },
    { path: '**', redirectTo: '', pathMatch: "full" },
];
