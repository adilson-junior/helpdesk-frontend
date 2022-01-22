import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

//Aqui definimos toda a rota do nosso sistema
const routes: Routes = [
  {
    //defino que toda rota vazia /'' será direcionado para esse componente.
    path: '',
    component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
