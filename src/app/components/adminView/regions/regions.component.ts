import { Component, OnInit } from '@angular/core';
import {RegionsService} from 'src/app/services/administration/regions.service';
import {Regions} from 'src/app/models/administration/regions';

declare var $: any;

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regionsList=[]
  constructor(private regionsService: RegionsService) { }

  ngOnInit(): void {
    var primaryKeyToDelete;
    var primaryKeyToChange;
    var asd = this.regionsService;
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var col1 = $row.find("td:eq(1)").text(); // Find the text
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      var col4=$row.find("td:eq(4)").text();
      
      $("#modifiedCountry").val(col1);
      $("#modifiedState").val(col2);
      $("#modifiedRegion").val(col3);
      $("#modifiedProvince").val(col4);

    });
    }); 

    this.regionsService.getRegiones().subscribe((regions) => {
      this.regionsList=regions;
    })  
    /* Get modified data */
    $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChange = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

     $(document).ready(function() {
      $("#sendModifiedRegion").click(function() {
        var country=$("#modifiedCountry").val();
        var state= $("#modifiedState").val();
        var region=$("#modifiedRegion").val();
        var province=$("#modifiedProvince").val();

        return asd.modificar(primaryKeyToChange, country,state, region,province, "America"); 
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedRegion").click(function() {
        var country=$("#country").val();
        var state= $("#state").val();
        var region=$("#region").val();
        var province=$("#province").val();

        return asd.sendData(country,state, region,province, "America"); 
      });
    })

    /* Get deleted data */
    $(document).ready(function() {
      $("#getDeleteData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToDelete = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

    $(document).ready(function() {
      $("#deleteRegion").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = primaryKeyToDelete;
        return asd.delete(primaryKeyToDelete); 
      });
    })

    
   
  }

}
