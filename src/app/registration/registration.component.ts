import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  regData: any = {};
  ngOnInit(): void {
  }
 
  onRegister() {
   
    alert('REGISTER SUCCESS!! :-)\n\n' + JSON.stringify(this.regData));
  }

}
