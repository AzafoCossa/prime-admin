import { PanelModule } from 'primeng/panel';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileComponent } from './profile/profile.component';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SideBarComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    CardModule,
    PanelMenuModule,
    InputTextModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
  ],
})
export class AdminModule {}
