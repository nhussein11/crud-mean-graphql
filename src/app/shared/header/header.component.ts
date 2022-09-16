import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  home: MenuItem = {};


  ngOnInit(): void {
    this.items = [
      { label: ' Quotes', icon:'pi pi-book', routerLink:'/quotes'},
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }

}
