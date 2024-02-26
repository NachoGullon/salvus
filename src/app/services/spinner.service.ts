import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  mostrandoSpinner = false;

  mostrarSpinner() {
    this.mostrandoSpinner = true;
  }

  ocultarSpinner() {
    this.mostrandoSpinner = false;
  }
}
