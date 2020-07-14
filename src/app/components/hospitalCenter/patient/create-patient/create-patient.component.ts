import { Component, OnInit } from '@angular/core';
import {StatesService} from 'src/app/services/administration/states.service';
import {States} from 'src/app/models/administration/states';
import {PathologiesService} from 'src/app/services/administration/pathologies.service';
import {Pathologies} from 'src/app/models/administration/pathologies';
import {RegionsService} from 'src/app/services/administration/regions.service';
import {Regions} from 'src/app/models/administration/regions';
declare var $: any;

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  regionsList=[]
  pathologiesList=[]
  statesList=[]
  constructor(private statesService: StatesService,private pathologiesService: PathologiesService,private regionsService: RegionsService) { }

  ngOnInit(): void {
    $("#pathologies").mousedown(function(e){
      e.preventDefault();
      
      var select = this;
      var scroll = select.scrollTop;
      
      e.target.selected = !e.target.selected;
      
      setTimeout(function(){select.scrollTop = scroll;}, 0);
      
      $(select).focus();
  }).mousemove(function(e){e.preventDefault()});
    this.statesService.getStates().subscribe((states) =>{
      this.statesList=states;
    }) 

     this.pathologiesService.getPathologies().subscribe((pathologies) =>{
      this.pathologiesList=pathologies;
    })

    this.regionsService.getRegiones().subscribe((regions) =>{
      this.regionsList=regions;
    })

  }

}
