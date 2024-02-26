

// services/registro.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private apiUrl = 'http://localhost:4200/crear_sanitario.php';

  constructor(private http: HttpClient) {}

  crearSanitario(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
