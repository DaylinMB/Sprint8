import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from '../services/chart.service';
@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css',
})


export class GraficosComponent {
  public chart: any;
  public chart2: any;

  ngOnInit(): void {
    this.getDataAndCreateChart();
  }

  constructor(private _chartService: ChartService) {}

  createChart(data: any) {
    const pData = JSON.parse(data);
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: pData,
      options: {
        aspectRatio: 2.5,
      },
    });

  }

  createChart2(data: any) {
    const pData = JSON.parse(data);
    this.chart2 = new Chart('MyChart2', {
      type: 'doughnut', //this denotes tha type of chart
      data: pData,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  getDataAndCreateChart(): void {
    this._chartService.getChart('bar').subscribe((data: any) => {
      this.createChart(data.data);
    });
    this._chartService.getChart('doughnut').subscribe((data: any) => {
      this.createChart2(data.data);
    });
  }
}
