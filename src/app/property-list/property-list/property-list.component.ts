import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: 'property-list.component.html',
  styleUrls: ['property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: Array<IProperty>;
  constructor(private housingservice:HousingService) { }

  ngOnInit() {
    this.housingservice.getAllProperties().subscribe(
data=>{
  this.properties=data;
}
    );
  }

}
