import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

  public chart: any;

  ngOnInit(): void {
    this.getDataAndCreateChart(this.chart);
  }

  constructor(private http: HttpClient) { }

  createChart(data: any, chart: any) {

    const pData = JSON.parse(data);
    chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: pData,
      options: {
        aspectRatio: 2.5
      }

    });
  }

  getDataAndCreateChart(chart: any): void {
    this.http.get<any>('http://localhost:3000/api/charts/bar')
      .subscribe(data => {

        this.createChart(data.data, chart)
      });
  }
}
