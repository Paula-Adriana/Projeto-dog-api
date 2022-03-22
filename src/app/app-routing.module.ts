import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { ListaDogsComponent } from './componentes/lista-dogs/lista-dogs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Lista', component: ListaDogsComponent},
  {path: 'Detalhes/:breed', component: DetalhesComponent},
  {path: '', redirectTo: '/Lista', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
