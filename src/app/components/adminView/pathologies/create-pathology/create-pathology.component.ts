import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-create-pathology',
  templateUrl: './create-pathology.component.html',
  styleUrls: ['./create-pathology.component.css']
})
export class CreatePathologyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $("#symptoms").mousedown(function(e){
      e.preventDefault();
      
      var select = this;
      var scroll = select.scrollTop;
      
      e.target.selected = !e.target.selected;
      
      setTimeout(function(){select.scrollTop = scroll;}, 0);
      
      $(select).focus();
  }).mousemove(function(e){e.preventDefault()});
  }

}
