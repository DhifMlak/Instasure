import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  totSinistres:number;
  sainSinstres:number;
  fraudeSinistres:number;
  public pieChartLabels: Label[] = [['Sain'], ['Fraude']];
  public pieChartData: number[] = [];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(52, 152, 219,1.0)', 'rgba(231, 76, 60,1.0)'],
    },
  ];

  constructor(private sinistreService: ReportsService) {

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.sinistreService.getSinistreCount().subscribe(data => {
      this.sainSinstres = data.sain;
      this.fraudeSinistres = data.fraude;
      this.totSinistres = data.total;
      this.pieChartData.push(this.sainSinstres);
      this.pieChartData.push(this.fraudeSinistres);


    });

  }
}