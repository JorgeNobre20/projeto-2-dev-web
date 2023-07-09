import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './Pages/Cadastro/cadastro.component';

const routes: Routes = [
  {path:'cadastro', component: CadastroComponent},
  /* 
  {path:'', component: ""},
  {path:'home', component: ""},
  {path:'chat', component: ""} 
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
