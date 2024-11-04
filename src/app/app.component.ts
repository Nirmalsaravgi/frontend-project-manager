import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ProjectComponent } from "./project/project.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
// import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ProjectComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cookieService = inject(CookieService);
  title = 'frontend-project-manager';
  router = inject(Router);
  cookieInput = new FormControl('');

  // ngOnInit(): void {
	// 	this.cookieService.set('X-Auth-Token', '');
	// }
}
