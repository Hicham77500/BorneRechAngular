import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(private mapService: MapService) { }

  ngOnInit(): void {
this.getDataMap();
  }
  
getDataMap() {
  this.mapService.getData().subscribe(data => {
    console.log(data);
  })
}
}
