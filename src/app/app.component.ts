import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/service/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Interview App';
  public serviceStatus = 'DOWN';

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe(res => {
      if (res) {
        this.serviceStatus = res.status;
      }
    });
  }
}
