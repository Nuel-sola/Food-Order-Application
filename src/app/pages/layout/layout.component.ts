import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  loggedDat: any;
  isLoggedIn: boolean = false;
  user: { [key: string]: any } = {};
  constructor() {
    // const isLoggedIn = localStorage.getItem('isLoggedIn');
    // const user = localStorage.getItem('user')
    // if(loggedData != null) {
    //   const data = JSON.parse(loggedData);
    //   this.loggedDat = data;
    // }
  }

  logoff() {
    localStorage.removeItem('user');
    this.loggedDat = undefined;
  }
  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userString = localStorage.getItem('user');
    if (userString !== null) {
      this.user = JSON.parse(userString);
      console.log(this.user)
    }
  }
}
