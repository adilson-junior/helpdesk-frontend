import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

//Aqui definimos toda a rota do nosso sistema
const routes: Routes = [
  {
    //defino que toda rota vazia /'' será direcionado para esse componente.
    path: '', component: NavComponent,
      children: [
        { path: 'home', component: HomeComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
