import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  onSubmit(form: NgForm) {
    this.authenticationService.login(form.value).subscribe(result => {
      if (result) {
        sessionStorage.setItem('user', JSON.stringify(result));
        this.router.navigateByUrl('myInterviewApp/home');
      }
    });
  }

  goToRegister() {
    this.router.navigateByUrl('/myInterviewApp/register');
  }

  goToHelp() {
    this.router.navigateByUrl('/myInterviewApp/help');
  }

}
