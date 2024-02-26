
// sanitario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sanitario } from '../interface/Sanitario';

@Injectable({
    providedIn: 'root'
})
export class SanitarioService {
    apiSanitarios: string = 'apisanitarios';

    constructor(private http: HttpClient) {}

    registrarSanitario(sanitario: Sanitario): Observable<any> {
        return this.http.post(`${this.apiSanitarios}`, sanitario);

    }
}
