import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice:AuthService,private router:Router){

  }
  seConnecter(email:string,pass:string){
    this.authservice.loginUser(email,pass)
  }
}
