import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { Paises, Persona } from '../../interfaces/pesona.interface';
import { PaisChart } from '../../interfaces/paisChart.interface';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  boleano:Boolean = false
  personasDb: Persona[] = []
  paises = Object.values(Paises);
  paisesCharts: PaisChart[] = []

  paisString: string[] = [];
  cantNumber: number[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.paisString,
    datasets: [{
      data: this.cantNumber
    }]
  };

  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.toggleLegend();
    
  }

  obtenerEmpleados() {
    return this.personaService.getPersonas().subscribe(dato=>{
      this.personasDb = dato
      this.paises.forEach(pais=>{
        if(this.personasDb.filter(persona=> persona.pais===pais).length>0){
          this.paisString.push(pais);
          this.cantNumber.push(this.personasDb.filter(persona=> persona.pais===pais).length);
        }
 
      })
    })
  }

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }
    this.chart?.render();
  }

}
