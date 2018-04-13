import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './components/hero-detail/hero-detail.component';
 
const routes: Routes = [{
    path: 'heroes',
    component: HeroesListComponent
  }, {
    path: 'hero/:id',
    component: HeroDetailsComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}