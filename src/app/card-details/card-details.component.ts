import { Component, OnInit } from '@angular/core';
import { process, State, SortDescriptor } from '@progress/kendo-data-query';

import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
import { AppService, dataSource } from '../app.services';


@Component({
  selector: 'app-ng',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  public responseData: any = [];
  public showLoading: boolean = false;

  public sort: SortDescriptor[] = [{
    field: '',
    dir: 'asc'
  }];

  public state: State = {
    skip: 0,
    take: 5,

    filter: {
      logic: 'and',
      filters: [{ field: 'homeOwnership', operator: 'contains', value: 'RENT' }]
    }
  };

  public gridData: GridDataResult = process(dataSource, this.state);

  constructor(public apiService: AppService, private router: Router) { }

  // ngOnInit(): void {
  //   // this.apiService.getAllCustomers().subscribe((data : {}) => {
  //   //   console.log(data);
  //   // });
  //   this.responseData  = dataSource;
  //   // this.responseData  = this.responseData.responseBody; 
  //   this.gridData = process(this.responseData, this.state);
  //   this.showLoading = false;
  // }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(dataSource, this.state);
  }

  public onRowClick(dataItem) {
    this.router.navigate(['editField', dataItem.dataItem.memberId]);
  }

}
