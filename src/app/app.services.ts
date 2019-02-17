import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


const apiURL = 'http:/localhost:8080/';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.post(apiURL + 'user', { headers: headers });

  }

  getAllCustomers() {
    return this.http.get(apiURL + 'listAllCustomer');
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

export const dataSource = [
  {
    "memberId": 943135,
    "loanAmnt": 10000,
    "fundedAmnt": 9975,
    "term": " 36 months",
    "intRate": 6.619999885559082,
    "installment": 307.0400085449219,
    "grade": "A",
    "empTitle": "Beckman coulter",
    "empLength": "4 years",
    "homeOwnership": "RENT",
    "annualInc": 75000,
    "verificationStatus": "Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "",
    "purpose": "home_improvement",
    "title": "Renovation loan",
    "addrState": "FL",
    "lastPymntD": "May-13",
    "lastPymntAmnt": 5847.47021484375
  },
  {
    "memberId": 966880,
    "loanAmnt": 8400,
    "fundedAmnt": 8400,
    "term": " 36 months",
    "intRate": 6.619999885559082,
    "installment": 257.9200134277344,
    "grade": "A",
    "empTitle": "Hoel Palomar",
    "empLength": "2 years",
    "homeOwnership": "RENT",
    "annualInc": 25000,
    "verificationStatus": "Source Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "  Borrower added on 12/08/11 > Have this amount spread around on 5 different cards.  Want to consolidate for the better interest rate and to stop giving a ridiculous amount of interest to big mean banks!<br>",
    "purpose": "debt_consolidation",
    "title": "Credit Card Payoff",
    "addrState": "CA",
    "lastPymntD": "Dec-14",
    "lastPymntAmnt": 274.4700012207031
  },
  {
    "memberId": 1030901,
    "loanAmnt": 8875,
    "fundedAmnt": 8875,
    "term": " 36 months",
    "intRate": 7.510000228881836,
    "installment": 276.1099853515625,
    "grade": "A",
    "empTitle": "Ashbrook Village Senior Community",
    "empLength": "1 year",
    "homeOwnership": "MORTGAGE",
    "annualInc": 38000,
    "verificationStatus": "Not Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "",
    "purpose": "debt_consolidation",
    "title": "Credit Card Debt Consolidation",
    "addrState": "GA",
    "lastPymntD": "Sep-13",
    "lastPymntAmnt": 4472.7998046875
  },
  {
    "memberId": 1107021,
    "loanAmnt": 3000,
    "fundedAmnt": 3000,
    "term": " 36 months",
    "intRate": 6.03000020980835,
    "installment": 91.30999755859375,
    "grade": "A",
    "empTitle": "Virginia Tech",
    "empLength": "5 years",
    "homeOwnership": "RENT",
    "annualInc": 50000,
    "verificationStatus": "Not Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "  Borrower added on 12/11/11 > Currently, I do not pay interest on my CC debt, and I am on track on paying it down before the promotional rates expire. However, I have had various expenses lately (holiday obligations, minor travel, renewal of professional subscriptions, some small ticket purchases, etc. ) that I just do not want to add them on a CC  and have to pay the higher interest (vs. Lending Club) on them. Furthermore, I always wanted to try Lending Club and diversify the type accounts on my credit report. I will probably pay the loan sooner than 36 months.<br>",
    "purpose": "other",
    "title": "Avoid CCs,Various Seasonal and Other Exp",
    "addrState": "VA",
    "lastPymntD": "Oct-13",
    "lastPymntAmnt": 573.77001953125
  },
  {
    "memberId": 1194336,
    "loanAmnt": 4500,
    "fundedAmnt": 4500,
    "term": " 36 months",
    "intRate": 8.899999618530273,
    "installment": 142.88999938964844,
    "grade": "A",
    "empTitle": "New Buck Corporation",
    "empLength": "10+ years",
    "homeOwnership": "MORTGAGE",
    "annualInc": 50700,
    "verificationStatus": "Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "  Borrower added on 12/12/11 > To payoff an auto loan and finish restoring my 1960 MGA<br><br> Borrower added on 12/12/11 > To payoff an auto loan and finish restoring my 1960 MGA<br>",
    "purpose": "other",
    "title": "restore classic car",
    "addrState": "NC",
    "lastPymntD": "Dec-13",
    "lastPymntAmnt": 1912.1600341796875
  },
  {
    "memberId": 1200058,
    "loanAmnt": 20000,
    "fundedAmnt": 13041,
    "term": " 60 months",
    "intRate": 10.649999618530273,
    "installment": 290.6400146484375,
    "grade": "B",
    "empTitle": "The Woodlands Financial Group",
    "empLength": "2 years",
    "homeOwnership": "MORTGAGE",
    "annualInc": 175000,
    "verificationStatus": "Verified",
    "issueD": "Dec-11",
    "loanStatus": "Current",
    "desc": "",
    "purpose": "debt_consolidation",
    "title": "Debt Consolidation Loan",
    "addrState": "TX",
    "lastPymntD": "Dec-15",
    "lastPymntAmnt": 290.6400146484375
  },
  {
    "memberId": 1208718,
    "loanAmnt": 18500,
    "fundedAmnt": 13250,
    "term": " 60 months",
    "intRate": 11.710000038146973,
    "installment": 292.80999755859375,
    "grade": "B",
    "empTitle": "Cisco System Inc.",
    "empLength": "2 years",
    "homeOwnership": "RENT",
    "annualInc": 100000,
    "verificationStatus": "Verified",
    "issueD": "Dec-11",
    "loanStatus": "Fully Paid",
    "desc": "  Borrower added on 12/16/11 > Making a investment in a property. Getting it for really less and hopefully worth an investment and should appreciate in near future.<br>",
    "purpose": "major_purchase",
    "title": "Personal Investment Loan",
    "addrState": "CA",
    "lastPymntD": "Jun-14",
    "lastPymntAmnt": 7889.72998046875
  }]
