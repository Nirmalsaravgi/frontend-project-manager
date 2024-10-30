import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // isMenuOpen: boolean = false;
  isDivCollapsed: boolean = false;

  isUserMenuOpen: boolean = false;
  isDropDownOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  collapseSidebar(){
    this.isDivCollapsed = !this.isDivCollapsed;
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  toggleSidebar() {
    // Logic to open/close sidebar
    console.log("testing!");
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const userMenu = this.elRef.nativeElement.querySelector('#dropdown-user');
    const targetElement = event.target as HTMLElement;

    // Check if the clicked element is outside the user menu
    if (userMenu && !userMenu.contains(targetElement) && !targetElement.closest('.user-menu-button')) {
      this.isUserMenuOpen = false;
    }
  }

  // toggleModal() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}
