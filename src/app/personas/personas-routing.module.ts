import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AgregarEditarPersonaComponent } from './pages/agregar-editar-persona/agregar-editar-persona.component';
import { GraficoComponent } from './pages/grafico/grafico.component';

//localhost:4200/personas
const routes: Routes = [
  {
    path:"",
    component: HomePageComponent,
    children:[
      {path:'listar', component: ListaPersonasComponent},
      {path:'agregar', component: AgregarEditarPersonaComponent},
      {path:'grafico', component: GraficoComponent},
      {path:'editar/:id', component: AgregarEditarPersonaComponent},
      {path:'**', redirectTo:'listar'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
