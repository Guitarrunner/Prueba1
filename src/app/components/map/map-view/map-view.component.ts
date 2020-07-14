import { Component, OnInit, Input } from '@angular/core';
import {CountryStatusService} from 'src/app/services/country-status.service';
import { CountryReport} from 'src/app/models/country-report';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  status:CountryReport;

  latitude = 10.01625;
  longitude = -84.21163;
  country = "Costa Rica";
  locationChosen=false;

  onChoseLocation(event){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationChosen=true;
    console.log(event)
    this.getData();
  }

  getData(){
 //geocoder here
 var geocoder = new google.maps.Geocoder;
  var map = document.getElementById('map');
  var latlng = {lat: this.latitude, lng: this.longitude};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        console.log(results[0].formatted_address);
        var tmp = results[0].formatted_address.split(',', 8);
        this.country=tmp[tmp.length-1];
        console.log(tmp[tmp.length-1]); //COUNTRY
      }
    }
  });
    this.APIdata(this.country);
  }

  APIdata(country){
//metodo del api aca
    this.status= new CountryReport(12,12,12,12,12,["1","2"]);
    this.msg.sendMsg(this.status);
  }

  constructor(private msg: CountryStatusService) { }

  ngOnInit(): void {
  }

}
