import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-application-frame',
  templateUrl: './application-frame.component.html',
  styleUrls: ['./application-frame.component.css']
})
export class ApplicationFrameComponent {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

}
