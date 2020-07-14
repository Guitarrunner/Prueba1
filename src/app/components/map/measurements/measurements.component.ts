import { Component, OnInit } from '@angular/core';
import { CountryReport } from 'src/app/models/country-report';
import { CountryStatusService } from 'src/app/services/country-status.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  medidas = ["Bloqueo de fronteras", "Distanciamiento social", "Uso obligatorio de cubre bocas"];
  constructor(private msg: CountryStatusService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((update: CountryReport) => {
      this.measurementsUpdate(update)
  })
  }

  measurementsUpdate(newReport:CountryReport){
    this.medidas=newReport.medidas;
  }

}
