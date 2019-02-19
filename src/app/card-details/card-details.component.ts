import { Component, OnInit } from '@angular/core';
import { process, State, SortDescriptor } from '@progress/kendo-data-query';

import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
import { AppService } from '../app.services';


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
    take: 12,

    filter: {
      logic: 'and',
      filters: []
    }
  };

  public gridData: GridDataResult;

  constructor(public apiService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllCustomers().subscribe((data: {}) => {
      this.fetchData(data);
    });
  }

  public fetchData(data: {}) {
    this.responseData = data;
    this.responseData = this.responseData.responseBody;
    this.gridData = process(this.responseData, this.state);
    console.log(this.gridData);
    this.showLoading = false;
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.responseData, this.state);
  }

  public onRowClick(dataItem: { dataItem: { cardNum: any; }; }) {
    this.router.navigate(['home', dataItem.dataItem.cardNum]);
  }

}
