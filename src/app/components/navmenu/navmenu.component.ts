import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user.service';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  userEmail:string='';
  isAuth:boolean=false;
  constructor(private auth:AuthService){
    const autho=getAuth();
    autho.onAuthStateChanged(
      (user)=>{
        if(user){
          if(user.email!=null){
            this.userEmail=user.email;
          }
          this.isAuth=true;
        }
        else{
          this.userEmail="";
          this.isAuth=false
        }
      }
    )
  }
  ngOnInit(): void {
     
  }
 onSignOut(){
  this.auth.signOutUser();
 }
}
