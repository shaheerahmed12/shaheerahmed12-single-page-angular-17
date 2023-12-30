import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../../property-list/IProperty';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {
  @Input() property: any; // Keep it as an array
}