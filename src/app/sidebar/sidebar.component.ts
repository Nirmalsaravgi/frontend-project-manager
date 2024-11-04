import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MasterService } from '../services/master.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  // isMenuOpen: boolean = false;
  isDivCollapsed: boolean = false;

  isUserMenuOpen: boolean = false;
  isDropDownOpen: boolean = false;
  isProjectMenu: boolean = false;
  isDropDownOpen2: boolean = false;

  projectList: any [] = [];

  constructor(private elRef: ElementRef) {}

  router = inject(Router);
  mastersrv = inject(MasterService);
  cookieService = inject(CookieService);

  ngOnInit(): void {
    this.getUserProjects();
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  collapseSidebar(){
    this.isDivCollapsed = !this.isDivCollapsed;
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  toggleProjectMenu() {
    this.isProjectMenu = !this.isProjectMenu;
  }

  toggleDropDown2() {
    this.isDropDownOpen2 = !this.isDropDownOpen2;
  }

  toggleSidebar() {
    // Logic to open/close sidebar
    console.log("testing!");
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const userMenu = this.elRef.nativeElement.querySelector('#dropdown-user');
  //   const targetElement = event.target as HTMLElement;

  //   // Check if the clicked element is outside the user menu
  //   if (userMenu && !userMenu.contains(targetElement) && !targetElement.closest('.user-menu-button')) {
  //     this.isUserMenuOpen = false;
  //   }
  // }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Check if click is inside User Menu or its toggle button
    const isClickInsideUserMenu = targetElement.closest('#userMenuButton') || targetElement.closest('#userMenu');
    if (!isClickInsideUserMenu) {
      this.isUserMenuOpen = false;
    }

    // Check if click is inside Project Menu or its toggle button
    const isClickInsideProjectMenu = targetElement.closest('#projectMenuButton') || targetElement.closest('#projectMenu');
    if (!isClickInsideProjectMenu) {
      this.isProjectMenu = false;
    }

  }

  getUserProjects() {
    const token = this.cookieService.get('token'); // Retrieve the token from cookies
    if (token) {
      this.mastersrv.getUserProjects(token).subscribe(
        (res: any) => {
          this.projectList = res.projects;
        },
        (err: any) => {
          console.error('Error fetching user projects:', err);
        }
      );
    } else {
      console.log("No token found. User might not be logged in.");
    }
  }

  openBoard(){
    this.router.navigateByUrl('/board');
  }

  // toggleModal() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
