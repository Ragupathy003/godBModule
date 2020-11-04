import { Component, OnInit } from '@angular/core';
import {ListserviceService} from '../listservice.service'

@Component({
  selector: 'app-listingdata',
  templateUrl: './listingdata.component.html',
  styleUrls: ['./listingdata.component.css']
})
export class ListingdataComponent implements OnInit {

  employeeData:any = [];

  constructor(private ListserviceService:ListserviceService) { 

  }

  ngOnInit(): void {
  
    this.ListserviceService.getEmployeeDatas().subscribe((data) => {
      this.employeeData = data;
      console.log("employeeData employeeData",this.employeeData);
    });
  }

}
