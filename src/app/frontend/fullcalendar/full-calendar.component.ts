import { Component, ViewChild, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarService } from '../services/calendar.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Calendar } from '../interfaces/calendar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, FormsModule],
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit {
  @ViewChild('createEventModal') createEventModal: any;
  @ViewChild('eventDetailsModal') eventDetailsModal: any; // Añadir esta línea
  events: Calendar[] = [];
  eventName: string = '';
  eventDate: string = '';
  id: string = '';
  selectedEvent: {
    id: string;
    title: string;
    start: string;
    end: string;
  } | null = null;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    dateClick: (arg) => this.openCreateEventModal(arg),
    eventClick: (info) => this.handleEventClick(info),
    events: [],

    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek',
    },
  };

  constructor(
    private _calendarService: CalendarService,
    private toastr: ToastrService,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getDataAndCreateCalendar();
  }

  getDataAndCreateCalendar(): void {
    this._calendarService.getEvents().subscribe((response) => {
      this.events = response as Calendar[];
      this.updateCalendarEvents();
    });
  }

  updateCalendarEvents(): void {
    this.calendarOptions.events = this.events.map((event) => ({
      title: event.title,
      start: event.start,
      end: event.end,
    }));
  }

  openCreateEventModal(arg: any) {
    if (arg.start) {
      this.eventDate = arg.start.toISOString().split('T')[0];
    }
    this.modalService.open(this.createEventModal);
  }

  createEvent(modal: any) {
    if (this.eventName && this.eventDate) {
      const newEvent: Calendar = {
        id: '',
        title: this.eventName,
        start: this.eventDate,
        end: this.eventDate,
      };

      this._calendarService
        .addEvent(newEvent)
        .subscribe((response: Calendar) => {
          this.toastr.success(`El evento ${newEvent.title} fue creado con éxito,
          Evento Registrado`);

          newEvent.id = response.id;

          this.events.push(newEvent);
          this.updateCalendarEvents();

          modal.close();
          this.eventName = '';
          this.eventDate = '';
        });
    }
  }

  handleEventClick(info: any) {
    this.selectedEvent = {
        id: info.event.id.toString(),
        title: info.event.title,
        start: info.event.start.toISOString(),
        end: info.event.end ? info.event.end.toISOString() : info.event.start.toISOString(),
    };
    console.log('Evento seleccionado:', this.selectedEvent);
    this.modalService.open(this.eventDetailsModal);
}



  deleteEvent(modal: any) {
    if (this.selectedEvent && this.selectedEvent.id) {
        this._calendarService.deleteEvent(this.selectedEvent.id).subscribe({
            next: () => {
                this.events = this.events.filter(event => event.id !== this.selectedEvent!.id);
                this.updateCalendarEvents();
                this.toastr.success(`El evento ${this.selectedEvent!.title} fue eliminado con éxito`);
                this.modalService.dismissAll();
            },
            error: (error) => {
                console.error('Error al eliminar el evento:', error);
                this.toastr.error(`Error al eliminar el evento: ${error.message}`);
            }
        });
    } else {
        this.toastr.error('No se puede eliminar el evento porque no está seleccionado');
    }
  }



}
