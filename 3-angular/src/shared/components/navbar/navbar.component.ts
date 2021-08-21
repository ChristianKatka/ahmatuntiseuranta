import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
