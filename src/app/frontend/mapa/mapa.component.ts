import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MarkerService } from '../services/marker.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {

  map: mapboxgl.Map | undefined; 
  style = 'mapbox://styles/mapbox/streets-v11';
  lng: number = 2.15899;
  lat: number = 41.38879;
  latLong: [number, number] = [this.lng, this.lat];

  constructor(private _markerService: MarkerService) { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoiZGF5bGlubTI0IiwiYSI6ImNtMjk5MGZraTAybWkya3NmaXY2MWV2NWcifQ.Y4Fv7EtLkOYAbCDP5yb3cQ",
      container: 'map',
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat]
    });

    this.map.on('load', () => {
      this._markerService.getMarkers().subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          const marker = data[i];
          new mapboxgl.Marker().setLngLat([marker.longitude, marker.latitude]).addTo(this.map!);
        }
      });
    });
  }
}
