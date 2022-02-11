import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { ApplicationFrameComponent } from './application-frame/application-frame.component';
import { AuthenticationModule } from './core/authentication/authentication.module';
import { UserDetailComponent } from './modules/userDetail/pages/user-detail/user-detail.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFrameComponent,
    UserDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
