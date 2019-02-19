import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';


const apiURLLogin = 'http://localhost:8080/';

const apiURL = 'http://localhost:8080/accenture/'

@Injectable()
export class AppService {

  public headersExport = new HttpHeaders();

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.headersExport = headers;
    this.http.get(apiURLLogin + 'user', { headers: headers }).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

  getAllCustomers() {
    return this.http.get(apiURL + 'listAllCustomer', { headers: this.headersExport });
  }

  findCustomerDetails(paramValue) {
    // let custId = new HttpParams().set("paramName", paramValue);
    return this.http.post(apiURL + 'findCustomer' + '/' + paramValue, null, { headers: this.headersExport });
  }

}

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
