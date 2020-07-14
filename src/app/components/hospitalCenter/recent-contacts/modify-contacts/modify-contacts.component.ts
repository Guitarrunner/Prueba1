import { Component, OnInit } from '@angular/core';
import { PathologiesService} from 'src/app/services/administration/pathologies.service';
import {Pathologies} from 'src/app/models/administration/pathologies';
declare var $: any;

@Component({
  selector: 'app-modify-contacts',
  templateUrl: './modify-contacts.component.html',
  styleUrls: ['./modify-contacts.component.css']
})
export class ModifyContactsComponent implements OnInit {
  pathologiesList=[]

  constructor(private pathologiesService: PathologiesService) { }

  ngOnInit(): void {
    $("#modifyPatientPathologies").mousedown(function(e){
      e.preventDefault();
      
      var select = this;
      var scroll = select.scrollTop;
      
      e.target.selected = !e.target.selected;
      
      setTimeout(function(){select.scrollTop = scroll;}, 0);
      
      $(select).focus();
  }).mousemove(function(e){e.preventDefault()});

      //   Obtener Informacion del Api 
    this.pathologiesService.getPathologies().subscribe((pathologies) =>{
      this.pathologiesList=pathologies;
    }) 

  }

}
