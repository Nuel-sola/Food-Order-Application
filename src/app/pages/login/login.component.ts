import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloggedIn: boolean = false;
  loginObj: any = {
    "username": "",
    "password": ""
  }
  isLoading: boolean = false

  constructor(private master: MasterService, private router :Router, private toast: NgToastService){}
  showSuccess(msg: string) {
    this.toast.success({
      detail: 'SUCCESS',
      summary: msg,
      duration: 5000,
      position: 'topRight',
    });
  }
  
  showError(msg: string) {
    this.toast.error({
      detail: 'ERROR',
      summary: msg,
      duration: 5000,
      position: 'topRight',
    });
  }
  
  showInfo(msg: string) {
    this.toast.info({
      detail: 'INFO',
      summary: msg,
      duration: 5000,
      position: 'topRight',
    });
  }

  onLogin() {
    this.isLoading = true
    this.master.login().subscribe((res:any)=>{
        const user = res['data'].find( (userdata:any) => {
        if(userdata.username === this.loginObj.username && userdata.password === this.loginObj.password){
          return userdata
          // console.log('yes user exists')
        }
      })
      if (user){
        this.isloggedIn = true;
        this.isLoading = false
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('user', JSON.stringify(user))
        this.showSuccess(`Welcome ${user.username}`)
        this.router.navigateByUrl('/foodCategory');
        // return user;
      }else{

        this.showError('User not found! Kindly register again')
        this.router.navigateByUrl('/register')
      }
    },
  (error) =>{
    this.showError(error)
    this.isLoading = false
  })
  }
}
