import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isRegister: boolean = false;
  isLoading: boolean = false
  registerObj: any = {
    "username": "",
    "password": ""
  }

  constructor(private master: MasterService, private router :Router, private toast: NgToastService,){}
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
  onRegister() {
    this.isLoading = true
    this.master.register(this.registerObj).subscribe((res:any)=>{
         this.isLoading = false
         if (res.message.toLowerCase().includes('document created successfull')){
          this.showSuccess('Registration Successful, kindly proceed to login!')
         } else {
          this.showSuccess(res.message)
         }
          this.isRegister = true;
          localStorage.setItem('isRegistered','true');
          this.router.navigateByUrl('/login');
    }, 
  
    (error) => {
      console.log(error)
      this.isLoading = false;
      this.showError(error)
    })
  }
}
