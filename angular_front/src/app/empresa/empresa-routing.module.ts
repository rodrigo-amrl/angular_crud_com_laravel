import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { AddFuncionarioComponent } from './add-funcionario/add-funcionario.component';



const routes: Routes = [
  { path: 'empresa', redirectTo: 'empresa/index', pathMatch: 'full' },
  { path: 'empresa/index', component: IndexComponent },
  { path: 'empresa/create', component: CreateComponent },
  { path: 'empresa/:empresaId/edit', component: EditComponent },
  { path: 'empresa/add-cliente/:empresaId/edit', component: AddClienteComponent },
  { path: 'empresa/add-funcionario/:empresaId/edit', component: AddFuncionarioComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
