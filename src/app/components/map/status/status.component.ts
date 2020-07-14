import { Component, OnInit } from '@angular/core';
import { CountryReport } from 'src/app/models/country-report';
import { CountryStatusService } from 'src/app/services/country-status.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  // [CONT, RECUPERADOS, MUERTOS, ACTIVOS, INC. DIARIO]
  status = [1242,323,122,797,30];
  constructor(private msg: CountryStatusService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((update: CountryReport) => {
      this.statusUpdate(update)
  })
  }

  statusUpdate(newReport:CountryReport){
    this.status = [
        newReport.contagiados,
        newReport.recuperados,
        newReport.muertos,
        newReport.activos,
        newReport.incDiario
    ];
  }

}
