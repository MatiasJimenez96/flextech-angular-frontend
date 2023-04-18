import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  irListaPersonas() {
    this.router.navigate(['/personas/listar'])
  }

  
  irAgregarPersona() {
    this.router.navigate(['/personas/agregar'])
  }
  
  irChart() {
    this.router.navigate(['/personas/grafico'])
  }

}
