import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}
  public items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        routerLink: '/admin',
      },
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'User', icon: 'pi pi-fw pi-user-plus' },
              { label: 'Filter', icon: 'pi pi-fw pi-filter' },
            ],
          },
          {
            label: 'Open',
            icon: 'pi pi-fw pi-external-link',
            url: '/admin/profile',
          },
          { separator: true },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-times',
            command: (click) => {
              this.router.navigate(['/admin/profile']);
            },
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
            routerLink: '/admin/profile',
            routerLinkActiveOptions: 'link-active',
          },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars',
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace',
                  },
                ],
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              },
            ],
          },
        ],
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ],
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [{ label: 'Delete', icon: 'pi pi-fw pi-trash' }],
          },
        ],
      },
    ];
  }
}
