import { HomeComponent } from './modules/home/pages/home/home.component';
import { ApplicationFrameComponent } from './application-frame/application-frame.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HelpComponent } from './core/authentication/components/help/help.component';
import { LoginComponent } from './core/authentication/components/login/login.component';
import { RegisterComponent } from './core/authentication/components/register/register.component';
import { WelcomeComponent } from './core/authentication/components/welcome/welcome.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'myInterviewApp', component: ApplicationFrameComponent, children: [
        { path: '', redirectTo: '/myInterviewApp/login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent, data: { pageTitle: 'Login' } },
        { path: 'register', component: RegisterComponent, data: { pageTitle: 'Register' } },
        { path: 'help', component: HelpComponent, data: { pageTitle: 'Help' } },
        { path: 'home', component: HomeComponent, data: { pageTitle: 'Home' } },
      ]
  },
  { path: '**', redirectTo: 'welcome' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
