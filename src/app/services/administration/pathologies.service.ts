import { Injectable } from '@angular/core';
import {Pathologies} from 'src/app/models/administration/pathologies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Cambiar direccion
const apiUrl = 'http://localhost:3000/reportes_tracking'; */

@Injectable({
  providedIn: 'root'
})
export class PathologiesService {
  pathologies: Pathologies[];

  constructor(private http: HttpClient) { }
      getPathologies(): Observable<Pathologies[]> {
        return this.http.get<Pathologies[]>('http://localhost:8081/api/patologia');
      
      }

      
    sendData( name, description,symptoms, treatment) {

      return this.http.post('http://localhost:8081/api/patologia', {
        NombrePatologia: name, Descripcion: description, Sintomas: symptoms,
        Tratamiento: treatment
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

    return this.http.delete('http://localhost:8081/api/patologia/' + nombre).subscribe(
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

 

 modificar(id, name, description,symptoms, treatment) {
   return this.http.put('http://localhost:8081/api/patologia/' + name, {IdPatologia:id,
     NombrePatologia: name, Descripcion: description, Sintomas: symptoms,
     Tratamiento: treatment
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
