import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Ariana', 'Tunis', 'Sousse','Ben Arous', 'kairouane'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100 , 200 , 120],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';




  constructor(private sinistreService: ReportsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
