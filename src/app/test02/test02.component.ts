import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-test02',
  templateUrl: './test02.component.html',
  styleUrls: ['./test02.component.scss']
})
export class Test02Component implements OnInit {

  private transfer = {
    user: {
      name: 'John Smith',
      photo_url: 'http://i.imgur.com/Y7u78c4.jpg'
    },
    transfer: {
      from: {
        account_name: 'Checking',
        account_number: 123456789123,
        account_balance: 5000
      },
      to: {
        name: 'Jane Smith',
        photo_url: 'http://i.imgur.com/CGILUTj.jpg'
      },
      amount: 300
    }
  };

  public alerts = [];

  constructor() {
  }

  ngOnInit() {
  }

  addAlert() {
    this.alerts.push({type: 'success', msg: 'Well done! You successfully read this important alert message.'});
    document.getElementById("calloutMessage").focus();
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
