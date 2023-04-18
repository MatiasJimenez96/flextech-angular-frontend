import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/pesona.interface';
import { PersonaService } from '../../service/persona.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit {

  personas: Persona[] = []

  displayedColumns: string[] = ['Nombre y Apellido', 'fecha_nacimiento', 'direccion', 'telefono', 'pais', 'acciones', 'space'];
  dataSource = this.personas;

  constructor(private personaService: PersonaService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerEmpleados();

  }

  

  agregarEditarPersona(id?:number){
    this.router.navigate(['/personas/editar', id]);
  }

  obtenerEmpleados() {
    return this.personaService.getPersonas().subscribe(personas => {
      this.personas = personas
    })
  }

  eliminarPersona(id: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado correctamente!',
          'success'
        )
        this.personaService.eliminarPorId(id).subscribe(dato =>{
          this.obtenerEmpleados();
        })
      }
    })
  }
}
