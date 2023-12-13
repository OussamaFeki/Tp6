import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user.service';


@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css']
})
export class NewCompteComponent implements OnInit{
   constructor(
    private authService :AuthService ,
     private router:Router){  }
   ngOnInit(): void {
       
   }
  creerCompte(email:string,pass:string){
       this.authService.createNewUser(email,pass)

  }
}
