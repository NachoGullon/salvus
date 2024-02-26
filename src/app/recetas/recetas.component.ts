import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.scss'
})
export class RecetasComponent implements OnInit {
  medicamentos: any[] = []; // Lista de medicamentos
  nuevoMedicamento: any = {}; // Nuevo medicamento a agregar

  constructor(private router: Router) { }
  
   // Método para agregar un nuevo medicamento a la lista
   agregarMedicamento() {
    if (this.nuevoMedicamento.nombre && this.nuevoMedicamento.dosis && this.nuevoMedicamento.frecuencia && this.nuevoMedicamento.indicaciones) {
      this.medicamentos.push({ ...this.nuevoMedicamento }); // Agregar el nuevo medicamento a la lista
      this.nuevoMedicamento = {}; // Limpiar el objeto nuevoMedicamento para permitir agregar más medicamentos
    } else {
      alert('Por favor complete todos los campos del medicamento.');
    }
  }

  volverAInicio() {
    this.router.navigate(['']);
  }

  irAtras() {
    this.router.navigate(['principal']);
  }

  ngOnInit() {
  }

}
