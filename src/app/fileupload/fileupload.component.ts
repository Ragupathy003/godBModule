import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  @ViewChild('file', { read: ElementRef })
  file: ElementRef;

 show:boolean=false;
  myFileName = 'sampleFile.txt';
  fileUrl = 'assets/file.txt'
  constructor() { }

  ngOnInit(): void {
  }


  upload() {
    const files = (this.file.nativeElement as HTMLInputElement).files;
    if(files.length > 0){
    this.show=false;
    }
    else{
      this.show=true;
    }
  console.log("files",files)
  }

  
}
