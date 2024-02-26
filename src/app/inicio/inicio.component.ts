import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  mostrarAvisoTemporal = false;

constructor(private router: Router) { }

  irALogin() {
    this.router.navigate(['/login']);
  
}
  irARegistro(){

    this.router.navigate(['/registro']);

  }

  irAprincipal(){
    this.router.navigate(['/principal']);
  }
}
