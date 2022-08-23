import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../property/IProperty.interface';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;


  constructor(private route: ActivatedRoute, private housingService: HousingService) { this.properties = [] }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // we are on property url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        
        },
      error => {
        console.log('httperror:');
        console.log(error);
      }
    )
  }
} 
    //  this.http.get('data/properties.json').subscribe(     
  //    data => {
  //      this.properties = data;
  //      console.log(data)
  //    }

  //  );
  //}
