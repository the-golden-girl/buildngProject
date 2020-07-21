import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public imageData: any;
  public htmlData: any;

  constructor(private sharedService: SharedService,
              private sanitizer: DomSanitizer,
              private route: Router) {}

  ngOnInit() {
    this.sharedService.sharedData.subscribe(data => this.imageData = data);
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.imageData.pageLongDescription);
  }

  routeToHome() {
    this.route.navigateByUrl('/home');
  }

}
