import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';

//Aqui definimos toda a rota do nosso sistema
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {    
    //defino que toda rota vazia /'' será direcionado para esse componente.
    path: '', component: NavComponent, canActivate: [AuthGuard],
      children: [
        { path: 'home', component: HomeComponent },
        //Rota do tecnico
        { path: 'tecnicos', component: TecnicoListComponent},
        { path: 'tecnicos/create', component: TecnicoCreateComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
