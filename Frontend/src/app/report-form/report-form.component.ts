import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as XLSX from 'xlsx';
import { ReportsService } from '../reports.service';
@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private reportService: ReportsService) {
    this.reportForm = new FormGroup({
      numero_sinistre: new FormControl('', []),
      ENERGIE: new FormControl('', []),
      NUM_POLICE: new FormControl('', []),
      annee_survenance: new FormControl('', []),
      Date_entree_RGA: new FormControl('', []),
      reglement_tot: new FormControl('', []),
      VALEUR_VENALE: new FormControl('', []),
      TYPE_CLIENT: new FormControl('', []),
      VILLE: new FormControl('', []),
      Marque: new FormControl('', []),
      GOUVERNORAT: new FormControl('', []),
      Date_Reception_devis: new FormControl('', []),
      PUISSANCE: new FormControl('', []),
      ANNEE: new FormControl('', []),
      TOT_reparation: new FormControl('', []),
      VALEUR_NEUF: new FormControl('', []),
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log('test');
    console.log(form.value);
    this.reportService.createReport(form.value).subscribe(data => {
      console.log(data);
    });




  }
}
