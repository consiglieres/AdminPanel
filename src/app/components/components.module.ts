import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersService } from '../services/users.service';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ListUsersComponent,
    FilterUsersComponent,
    ButtonsComponent
  ],
  imports: [ 
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ListUsersComponent,
    FilterUsersComponent,
    ButtonsComponent
  ],
  providers: [
    UsersService
  ],
})
export class ComponentsModule {}