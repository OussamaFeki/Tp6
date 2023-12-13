import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuth: boolean = false;
  
  constructor( private router:Router) {
    // Initialize Firebase if not already initialized
    const firebaseConfig = {
      apiKey: "AIzaSyDsRU-8ITl-XEbpoR6WyOTp6m2lyUa5PIU",
        authDomain: "tp6cr-57d1d.firebaseapp.com",
        projectId: "tp6cr-57d1d",
        storageBucket: "tp6cr-57d1d.appspot.com",
        messagingSenderId: "36343203253",
        appId: "1:36343203253:web:12eced70ee043d3d32c5fc",
        measurementId: "G-9HJKHTEX3C"
    };

    const app = initializeApp(firebaseConfig);
  }

  createNewUser(email: string, password: string) {
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User created successfully!");
        alert("User created successfully!")
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating a new account:", errorCode, errorMessage);
        alert('On n\'a pas creer votre compte'+'\n'+errorMessage)
        throw error;
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        this.isAuth=true;
        alert('Bienvenu'+email);
        console.log("Logged in successfully");
        this.router.navigate(['films'])
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error logging in:", errorCode, errorMessage);
        alert('Votre Compte est incorrect ')
        throw error;
      });
      
  }
  signOutUser(){
    const auth = getAuth();
    this.isAuth=false;
    auth.signOut();
  }
}
