import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryStatusService {

  subject = new Subject();

  constructor() { }

  sendMsg(report){
    console.log(report);
    this.subject.next(report) // Triggering event
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
