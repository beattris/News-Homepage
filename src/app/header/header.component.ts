import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sidebarIsHidden = 'display: none';

  showSidebar() {
    this.sidebarIsHidden = 'display: block';
  }

  hideSidebar() {
    this.sidebarIsHidden = 'display: none';
  }
}
