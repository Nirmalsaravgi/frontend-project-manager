import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    "email": '',
    "password": ''
  }

  mastersrv = inject(MasterService);
  router = inject(Router);

  // onSigin(){
  //   this.mastersrv.login(this.userObj).subscribe((res: any) =>{
  //     if(res.message == 'success'){
  //       this.router.navigateByUrl('/projects');
  //     } else{
  //       alert(res.error)
  //     }
  //   })
  // }
  onSigin() {
    console.log("User Object being sent:", this.userObj);
    this.mastersrv.login(this.userObj).subscribe((res: any) => {
        if (res.message === 'success') {
            this.router.navigateByUrl('/projects');
        } else {
            console.log(res.message);
            alert(res.error);
        }
    }, (err: any) => {
        alert("Login failed. Please try again.");
    });
}
}
