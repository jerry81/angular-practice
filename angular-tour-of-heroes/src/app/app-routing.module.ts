import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './/heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, // heroes matches path component is the component to load
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // import and configure in single step - 
  exports: [RouterModule] // aailable throughout the app
})
export class AppRoutingModule { }