import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';

//Aqui definimos toda a rota do nosso sistema
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {    
    //defino que toda rota vazia /'' será direcionado para esse componente.
    path: '', component: NavComponent, canActivate: [AuthGuard], canLoad:[AuthGuard],
      children: [
        { path: 'home', component: HomeComponent },
        //Rota do tecnico
        { path: 'tecnicos', component: TecnicoListComponent },
        { path: 'tecnicos/create', component: TecnicoCreateComponent },
        { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
        { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },
        //Rota do cliente
        { path: 'clientes', component: ClienteListComponent },
        { path: 'clientes/create', component: ClienteCreateComponent },
        { path: 'clientes/update/:id', component: ClienteUpdateComponent },
        { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
        //Rota do chamdo
        { path: 'chamados', component: ChamadoListComponent},
        { path: 'chamados/create', component: ChamadoCreateComponent },
        { path: 'chamados/update/:id', component: ChamadoUpdateComponent },
        { path: 'chamados/read/:id', component: ChamadoReadComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
