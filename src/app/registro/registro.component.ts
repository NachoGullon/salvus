import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  styleUrls: ['./registro.component.scss'],
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup; // Usamos '!' para indicar que será inicializada en ngOnInit

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      numeroColegiado: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      especialidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', Validators.required],
    });
  }

  registrarSanitario() {
    // Implementar la lógica para enviar los datos al backend y registrar al sanitario
    // Utilizar this.registroForm.value para obtener los valores del formulario
    // Utilizar un servicio para manejar la comunicación con el backend
    // Una vez que la operación sea exitosa, redirigir al usuario a la página de inicio
    console.log(this.registroForm.value);

    // Redireccióna inicio
    this.router.navigate(['/']);
  }

  volverAInicio() {
    this.router.navigate(['']);
  }
}
