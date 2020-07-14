import { Injectable } from '@angular/core';
import {Patients} from 'src/app/models/hospitalCenter/patients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Patients[];

  constructor(private http: HttpClient) { }
 getPatients(): Observable<Patients[]> {
   return this.http.get<Patients[]>('http://localhost:8081/api/paciente'); 
      
      }


      
    sendData( name,lastName,patientId,age,nationality,region,pathologies,states,medication,intern,uci, pais) {

      return this.http.post('http://localhost:8081/api/paciente', {
        NombrePaciente: name, Apellidos: lastName, ID: patientId,
        Edad: parseInt(age), Nacionalidad: nationality, Provincia: region, Patologias: pathologies, Estado: states, Medicacion: medication, Internado: intern
        , UCI: uci, Pais: pais,
      }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      });
  } 


  delete(nombre) {

    return this.http.delete('http://localhost:8081/api/paciente/' + nombre).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }

 modificar(id,name,lastName,patientId,age,nationality,region,pathologies,states,medication,intern,uci,pais) {
   return this.http.put('http://localhost:8081/api/paciente' + name, { IdPaciente: id,
     NombrePaciente: name, Apellidos: lastName, ID: patientId,
     Edad: parseInt(age), Nacionalidad: nationality, Provincia: region, Patologias: pathologies, Estado: states, Medicacion: medication, Internado: intern
     , UCI: uci, Pais: pais,
   }).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  } 
}
