import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './site/connexion/login/login.component';
import { NewCompteComponent } from './site/connexion/new-compte/new-compte.component';


const routes: Routes = [

  {path:'login', component:LoginComponent},
      {path:'newcompte', component:NewCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
