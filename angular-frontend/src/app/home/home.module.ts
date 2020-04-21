import { NgModule } from '@angular/core';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeRouterModule } from './home-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { CustomValidatiorModule } from '../shared/custom-validator/custom-validator.module';
import { AlertComponent } from '../shared/alert/alert.component';


@NgModule({
  declarations: [UserPageComponent, DefaultPageComponent, NewUserComponent, AlertComponent],
  imports: [HomeRouterModule, BrowserModule, CommonModule, FormsModule, CustomValidatiorModule],
  exports: [UserPageComponent, HomeRouterModule]
})
export class HomeModule {}
