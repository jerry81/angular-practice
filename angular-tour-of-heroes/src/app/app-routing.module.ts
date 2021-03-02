import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './/heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent } // heroes matches path component is the component to load
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }