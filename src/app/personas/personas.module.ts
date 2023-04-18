import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { AgregarEditarPersonaComponent } from './pages/agregar-editar-persona/agregar-editar-persona.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { GraficoComponent } from './pages/grafico/grafico.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ListaPersonasComponent,
    HomePageComponent,
    AgregarEditarPersonaComponent,
    HeaderComponent,
    FooterComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class PersonasModule { }
