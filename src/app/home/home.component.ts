import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from '../app.services';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

}