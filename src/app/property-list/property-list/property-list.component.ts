import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: 'property-list.component.html',
  styleUrls: ['property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: IProperty[];
  constructor(private route:ActivatedRoute,private housingservice:HousingService) { }
  Sell=1;

   ngOnInit() {
   if(this.route.snapshot.url.toString()){
     this.Sell=2;
   };
    
    this.housingservice.getAllProperties(this.Sell).subscribe(
data=>{
  this.properties=data;
  console.log()
}
    );
  }
}

