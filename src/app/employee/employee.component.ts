import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //template: '<p>Employees template</p>',
  styleUrls: ['./employee.component.css']
  //styles: ['p{background-color:red;}']
})
export class EmployeeComponent implements OnInit{

Name = "Evelio";
LastName = "Jimenez";
Age = 31;
//Company ="Own";

/*
GetCompany(company:string){
  
}
*/

enabledInput = false;

userRegistered = false;

registreredText = "nobody is registered";

getRegistreredUser(){
  this.userRegistered = false
}

setRegistreredUser(event:Event){
  //alert('the user is registrered now')
  //this.registreredText = 'The user is registrered now';
  if ((<HTMLInputElement>event.target).value == "yes") {
    this.registreredText = 'The user is registrered now';
  }
  else{
    this.registreredText = "nobody is registered";
  }

}

constructor() {}

ngOnInit(): void {
  
}

}
