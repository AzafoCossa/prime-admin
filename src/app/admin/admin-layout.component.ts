import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  public display = true;
  public search: string = '';
  public settingsOptions: MenuItem[] = [];
  constructor() {}

  public screenSize: any;

  ngOnInit(): void {
    this.windowSize();
    window.addEventListener('resize', () => {
      console.log(this.screenSize);
      this.windowSize();
    });

    this.settingsOptions = [
      { label: 'Profile', icon: 'pi pi-fw pi-user' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
      { label: 'Help Center', icon: 'pi pi-fw pi-question-circle' },
      { separator: true },
      { label: 'Logout', icon: 'pi pi-fw pi-sign-out' },
    ];
  }

  windowSize() {
    return (this.screenSize = window.innerWidth);
  }

  searchTerm() {
    console.log('Search clicked...');
  }
}
