import { Component, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('file', { read: ElementRef })
  file: ElementRef;

  title = 'myfirstapp';
  myFileName = 'sampleFile.txt';
  fileUrl = 'assets/file.txt'
  model: any = {};

  constructor(private route:Router){

  } 

  // onSubmit() {
  //   console.log("model",this.model)
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  // }
  

 
  // userLog:any={};
  // onLogin(){
  //   if(this.userLog.userEmail=="ragurio@gmail.com" && this.userLog.userPassword=="ragurio"){
  //  alert("success");
  //  this.route.navigate(['/listing']);
  //   }
  //   else{
  //     alert("failure");
  //   }
  //   console.log("userlog",this.userLog)
  // }

 

  // upload() {
  //   const files = (this.file.nativeElement as HTMLInputElement).files;
  // console.log("files",files)
   
  // }

 
 
}
