import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { GraduacaoListComponent } from './components/graducao/graduacao-list/graduacao-list.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent, children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'graduacao',
        component:GraduacaoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
