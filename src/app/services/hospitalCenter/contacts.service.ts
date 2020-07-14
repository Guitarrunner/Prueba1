import { Injectable } from '@angular/core';
import {Contacts} from 'src/app/models/hospitalCenter/contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const apiUrl = '/api/contacto'; 

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contacts[];
   /* new Contacts(1,'Alejandra','Cruz', 174652896,25,'gutemalteca','50 sur de la iglesia de pochito','lupus','ale@gmail.com'),
  */

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts[]> {
    console.log("a");
    return this.http.get<Contacts[]>('http://localhost:8081/api/contacto');
      /*getContacts(): Contacts[]{
        return this.contacts*/
      }


  
  sendData( name,Apellido,contactId,age,nationality,address,pathologies,email) {
    return this.http.post('http://localhost:8081/api/contacto', {
      NombreContacto: name, Apellidos: Apellido,IdPaciente:1, ID: contactId, direccion: address,
      Edad: parseInt(age), Nacionalidad: nationality, Patologias: pathologies, Email: email}).subscribe(
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


  delete(id) {

    return this.http.delete('http://localhost:8081/api/contacto/' + id).subscribe(
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


  modificar(id, name,Apellido,contactoId,age,nationality,address,pathologies,email) {
    return this.http.put('http://localhost:8081/api/contacto/' + id, { IdContacto: id,
      NombreContacto: name, Apellidos: Apellido, IdPaciente: 1, ID: contactoId, direccion: address,
      Edad: parseInt(age), Nacionalidad: nationality, Patologias: parseInt(pathologies), Email: email
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
