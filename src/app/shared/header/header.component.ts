import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  home: MenuItem = {};

  ngOnInit(): void {
    this.items = [
      {
        label: ' Quotes',
        icon: 'bi bi-journal-bookmark',
        routerLink: '/quotes',
      },
    ];

    this.home = { icon: 'bi bi-house', routerLink: '/home' };
  }
}
