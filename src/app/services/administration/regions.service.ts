import { Injectable } from '@angular/core';
import { Regions} from 'src/app/models/administration/regions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  regions: Regions[] = [];
  

  constructor(private http: HttpClient) { }
  getRegiones(): Observable<Regions[]> {
    return this.http.get<Regions[]>('http://localhost:8081/api/lugar'); 
      
      }

  sendData(country,state, region,province, continent) {

    return this.http.post('http://localhost:8081/api/lugar', {
      Pais: country, Distrito: state, Canton: region,
      Provincia: province, Continente: continent
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


  delete(pais) {

  return this.http.delete('http://localhost:8081/api/lugar' + pais).subscribe(
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

  modificar(id, country,state, region,province, continent) {
  return this.http.put('http://localhost:8081/api/lugar' + country, { IdLugar: id,
    Pais: country, Distrito: state, Canton: region,
    Provincia: province, Continente: continent
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
