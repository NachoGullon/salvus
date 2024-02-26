import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  
  constructor(private router: Router) { }

 /* actividadesRecientes: string[] = [
    'Consulta médica programada para hoy a las 10:00 am.',
    'Receta renovada por el doctor Martínez.',
    'Análisis de laboratorio pendiente de resultados.'
  ];
*/
  volverAInicio() {
    this.router.navigate(['']);
  }

  irARecetas(){
    this.router.navigate(['recetas']);
  }

  cerrarSesion() {
    // Limpiar tokens de sesión u otros datos de usuario almacenados
    localStorage.removeItem('token'); // Eliminar token de sesión almacenado en localStorage
    
    // Redirigir al usuario a la página de inicio de sesión o cualquier otra página deseada
    this.volverAInicio();
  }

  seleccionarOpcion(event: Event) {
    const opcionSeleccionada = (event.target as HTMLSelectElement).value;
    if (opcionSeleccionada === 'opcion1') {
      this.router.navigate(['/perfil']); // Redirige al usuario a la página de perfil
    } else if (opcionSeleccionada === 'opcion2') {
      this.cerrarSesion(); // Cierra la sesión del usuario y lo redirige a la página principal
    }
  }
}
