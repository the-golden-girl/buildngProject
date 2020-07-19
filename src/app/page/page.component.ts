import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  private imageData: any;
  private htmlData: any;

  constructor(private sharedService: SharedService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.sharedService.sharedData.subscribe(data => this.imageData = data);
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.imageData.htmlPageDescription);
  }

}
