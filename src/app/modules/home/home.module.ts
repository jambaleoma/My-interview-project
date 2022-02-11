import { UserDetailComponent } from './../userDetail/pages/user-detail/user-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, UserDetailComponent]
})
export class HomeModule { }
