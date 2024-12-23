import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { GraduacaoListComponent } from './components/graducao/graduacao-list/graduacao-list.component';
import { PosgradListComponent } from './components/posgraducao/posgrad-list/posgrad-list.component';
import { ProfessoresListComponent } from './components/professores/professores-list/professores-list.component';

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
      ,
      {
        path:'posgraduacao',
        component:PosgradListComponent
      },
      {
        path:'professores',
        component:ProfessoresListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
