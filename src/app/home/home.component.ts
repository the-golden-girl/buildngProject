import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data:any;

  constructor(private http: HttpClient,
              private route: Router,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('./assets/json/mock_data.json').subscribe(response => {
      this.data = response;
    });
  }

  routeToPage(imageData) {
    this.sharedService.nextMessage(imageData);
    this.route.navigateByUrl('/page');
  }

}
