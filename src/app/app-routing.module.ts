import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';

//Aqui definimos toda a rota do nosso sistema
const routes: Routes = [
  {
    //defino que toda rota vazia /'' será direcionado para esse componente.
    path: '', component: NavComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'tecnicos', component: TecnicoListComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
