import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from './http-services';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( 
    // Angular Modules 
    private http: HttpClient 
    ) { } 
    
  title = 'technical-exam';
  firstName=''
  middleName=''
  lastName=''
  emailAddress=''
  mobileNumber=''

  getUserUrl = 'http://localhost:8080/User/get'
  addUserUrl = 'http://localhost:8080/User/add'
  users:any
  ngOnInit() { 
    
    this.http.get<any>(this.getUserUrl).subscribe(data => {
      this.users=data
    })  
} 

  AddUser(){
    console.log(this.firstName,this.middleName,this.lastName,this.emailAddress,this.mobileNumber)
    this.http.post(this.addUserUrl, {
      "firstName":this.firstName,
      "middleName":this.middleName,
      "lastName":this.lastName,
      "emailAddress":this.emailAddress,
      "mobileNumber":this.mobileNumber,
    }).subscribe(data => {
      this.users=data
    })  
  }
  

}
