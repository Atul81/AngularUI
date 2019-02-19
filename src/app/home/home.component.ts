import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.services';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  greeting: any = [];
  showHtml: string = '';
  constructor(private app: AppService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.app.findCustomerDetails(543243).subscribe((data: {}) => {
      this.greeting =  data;
      this.greeting = this.greeting.responseBody.name;
      this.showHtml = this.greeting;
    });
  }

  public series: any[] = [{
    name: "Last Paid Amount",
    data: [7.943, 7.848, 9.284, 9.263, 11, 3.907]
  },
  {
    name: "Billable Amount",
    data: [3.907, 7.943, 9.284, 9.263, 11, 7.848,]
  },
  {
    name: "Due Amount",
    data: [11, 3.907, 7.943, 7.848, 9.284, 9.263]
  }];
  public categories: string[] = ['April', 'May', 'June', 'July', 'August', 'Sept'];

}
