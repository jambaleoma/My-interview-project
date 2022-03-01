import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/core/service/status.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public serviceStatus = 'DOWN';

  constructor(
    private router: Router,
    private statusService: StatusService) { }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe(res => {
      if (res) {
        this.serviceStatus = res.status;
      }
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/myInterviewApp/login');
  }

}
