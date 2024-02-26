import { Component } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  view: CalendarView = CalendarView.Month; // Vista inicial del calendario
  viewDate: Date = new Date(); // Fecha inicial del calendario

  events: CalendarEvent[] = []; // Lista de eventos en el calendario

  constructor() {}

  // Método para manejar el evento de clic en un evento del calendario
  handleEventClick(event: CalendarEvent): void {
    console.log('Evento clickeado:', event);
    // Aquí se puede agregar la lógica para manejar el clic en el evento
  }
}
