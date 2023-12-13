import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LoginComponent } from './site/connexion/login/login.component';
import { NewCompteComponent } from './site/connexion/new-compte/new-compte.component';
import { FilmsModule } from './site/films/films.module';



@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    LoginComponent,
    NewCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    FilmsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
