import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-card',
  /*template: `Template literal in ES6`*/
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
}
) 
export class PropertyCardComponent {
  @Input()
    property!: IProperty;
  //Property: any = {
  //  "Id": 1,
  //  "Name": "Brila House",
  //  "Type": "House",
  //  "Price": 12000

  //}
}
