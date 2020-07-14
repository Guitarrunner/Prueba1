import { Injectable } from '@angular/core';
import { Hospitals} from 'src/app/models/administration/hospitals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:8081/api/centrohospitalario'; 


@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
 
  hospitals: Hospitals[];

  constructor( private http: HttpClient ) {}  
 
  getHospitals(): Observable<Hospitals[]> {
      return this.http.get<Hospitals[]>(apiUrl); 
 
    }

    sendData( name, location, bedQuantity, uciQuantity, director, contact) {

      return this.http.post('http://localhost:8081/api/centrohospitalario', {
        NombreHospital: name, Director: director, Contacto: contact,
        Pais: "Costa Rica", Provincia: location, Capacidad: parseInt(bedQuantity), CamasUCI: parseInt(uciQuantity)
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


  delete(name) {

    return this.http.delete('http://localhost:8081/api/centrohospitalario/' + name).subscribe(
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

 

    modificar(id,  name, location, bedQuantity, uciQuantity, director, contact) {
      return this.http.put('http://localhost:8081/api/centrohospitalario/' + name, {idCentrohospitalario: id,
        NombreHospital: name, Director: director, Contacto: contact,
        Pais: "Costa Rica", Provincia: location, Capacidad: parseInt(bedQuantity), CamasUCI: parseInt(uciQuantity)
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
