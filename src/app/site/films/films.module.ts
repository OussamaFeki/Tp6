import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';



@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'films',canActivate:[AuthGuard],component:FilmsComponent}
    ])
  ]
})
export class FilmsModule { }
