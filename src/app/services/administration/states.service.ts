import { Injectable } from '@angular/core';
import { States} from 'src/app/models/administration/states';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  states: States[];

  constructor(private http: HttpClient) { }
      getStates(): Observable<States[]> {
        return this.http.get<States[]>('http://localhost:8081/api/estado'); 
      
      }

      
   sendData(state) {

     return this.http.post('http://localhost:8081/api/estado', { Estado: state }).subscribe(
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


    delete(estado) {

      return this.http.delete('http://localhost:8081/api/estado/' + estado).subscribe(
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

 

 modificar(id, estado) {
   return this.http.put('http://localhost:8081/api/estado/' + estado, { IdEstado: id, Estado: estado }).subscribe(
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
