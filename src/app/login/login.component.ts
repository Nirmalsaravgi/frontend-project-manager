import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

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
  cookieService = inject(CookieService);

  onSigin() {
    this.mastersrv.login(this.userObj).subscribe((res: any) => {
      if (res.message === 'success') {
        this.cookieService.set('token', res.token); // Store the token in cookies
        // console.log('Token set:', res.token);
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
