import { Component, Input } from '@angular/core';
import { IPropertyBase } from '../../model/ipropertybase';

@Component({
  selector: 'app-property-card',
  /*template: `Template literal in ES6`*/
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
}
) 
export class PropertyCardComponent {
  @Input()
  property!: IPropertyBase;
  @Input() hideIcons: boolean;
  //Property: any = {
  //  "Id": 1,
  //  "Name": "Brila House",
  //  "Type": "House",
  //  "Price": 12000

  //}
}
