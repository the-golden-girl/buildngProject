import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-data',
  templateUrl: './addData.component.html',
  styleUrls: ['./addData.component.scss']
})
export class AddDataComponent implements OnInit {

  @ViewChild('file', { static: true, read: ElementRef}) fileInput: ElementRef;
  public fileName: string;
  public display: boolean = false;

  public dataForm = new FormGroup({
    pageTitle: new FormControl(''),
    pageShortDescription: new FormControl(''),
    pageLongDescription: new FormControl(''),
    imageUrl: new FormControl('')
  });

  public tools: object = {
    items: [
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'
    ]
  };

  constructor(private sharedService: SharedService,
              private route: Router) {}

  ngOnInit() {}

  submitForm() {
    let imageUrl = 'http://localhost:3000/uploads/' + this.fileName;
    this.dataForm.value.imageUrl = imageUrl;

    this.sharedService.addData(this.dataForm.value).subscribe((response) => {
        console.log('response from post api call is : '+response);
        this.dataForm.reset();
        this.display = true;   
    });
  }
  
  uploadImage() {
    let fileData = this.fileInput.nativeElement;
    if (fileData.files && fileData.files[0]) {
      let fileToUpload = fileData.files[0];
      this.fileName = fileToUpload.name;

      this.sharedService.uploadImage(fileToUpload).subscribe((response) => {
        console.log('response from post api call is : '+response);
      });
    }

    // this.sharedService.uploadImage(this.dataForm.value.file).subscribe((response) => {
    //   console.log('response from post api call is : '+response);
    // });
  }

  // routeToHome() {
  //   this.route.navigateByUrl('/home');
  // }

}
