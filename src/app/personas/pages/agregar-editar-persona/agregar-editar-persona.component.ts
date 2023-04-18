import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paises, Persona } from '../../interfaces/pesona.interface';
import { PersonaService } from '../../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  titulo: String = 'Agregar ';
  minDate: Date;
  maxDate: Date;
  id!: number;

  paisSeleccionado!: String;

  paises = Object.values(Paises);


  personaForm!: FormGroup;
  persona: Persona = {};
  personaDb: Persona = {};

  constructor(private personaService: PersonaService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1); // Fecha -100years
    this.maxDate = new Date();                        // fecha actual
  }
  ngOnInit(): void {
    if (this.esEditar()) {
      this.titulo = 'Editar '
      this.id = this.route.snapshot.params['id'];
      this.personaService.getPersonaPorId(this.id).subscribe(dato => {
        this.personaForm.patchValue(dato);
      })
    }
    this.initForm();
  }

  initForm() {
    this.personaForm = this.fb.group({
      id: [],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      telefono: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }


  onSubmit(): void {
    if (this.personaForm.invalid) {
      this.personaForm.markAllAsTouched();
      return;
    }
    this.persona = this.personaForm.value;

    if (this.esEditar()) {
      this.personaForm.patchValue({ id: this.id })
      this.swaleditar()
      return;
    }
    this.swalAgregar();
  }

  onPaisSeleccionado(pais: string) {
    this.personaForm.patchValue({
      pais: pais
    })
  }

  esEditar(): Boolean {
    return this.route.snapshot.params['id'];
  }

  esInvalido(campo: string) {
    return this.personaForm.get(campo)?.errors && this.personaForm.get(campo)?.touched;
  }

  swaleditar() {
    Swal.fire({
      title: '¿Guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Guardado!',
          'Los datos se han actualizados correctamente!',
          'success'
        )
        this.personaService.editarPersona(this.persona).subscribe(dato => {
          this.router.navigate(['/personas/listar']);
        })
      }
    })
  }

  swalAgregar() {
    Swal.fire({
      title: '¿Guardar datos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Guardado!',
          'Los datos se han guardado correctamente!',
          'success'
        )
        this.personaService.agregarPersona(this.persona).subscribe(dato => {
          this.router.navigate(['/personas/listar']);
        })
      }
    })
  }

}
