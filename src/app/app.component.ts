import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from './app.services'
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined);
  }
  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
      this.router.navigateByUrl('/login');
    })).subscribe();
  }
}
