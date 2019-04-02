import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public doughnutChartLabels: Label[] = ['Ariana', 'Tunis', 'Sousse','Ben Arous', 'kairouan'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100 , 200 , 120],

  ];
  public doughnutChartType: ChartType = 'doughnut';


  public totSinistres: number;
  public sainSinstres: number;
  public fraudeSinistres: number;
  // pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['Sain 96%'], ['Fraude 4%']];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(52, 152, 219,1.0)', 'rgba(231, 76, 60,1.0)'],
    },
  ];

  // bar chart
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2017', '2018'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [0.30, 0.04] , label:'Ratio Sinistralité'},];

  sin2017 = 15;
  sin2018 = 20;


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

ngAfterViewInit() {
  // this.barChartData[0].data = [this.get2017Values(),this.get2018Values()];

}
}