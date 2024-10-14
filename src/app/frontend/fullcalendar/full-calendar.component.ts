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
import { Router } from '@angular/router'; 
import { EventInput } from '@fullcalendar/core'; // Asegúrate de importar EventInput

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, FormsModule],
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit {
  @ViewChild('createEventModal') createEventModal: any;
  events: Calendar[] = [];
  eventName: string = '';
  eventDate: string = '';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    dateClick: (arg) => this.openCreateEventModal(arg),
    select: (selectionInfo) => this.openCreateEventModal(selectionInfo),

    events: this.events,

    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek',
    },
  };

  constructor(
    private _calendarService: CalendarService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataAndCreateCalendar();
  }

  getDataAndCreateCalendar(): void {
    this._calendarService.getEvents().subscribe((response: EventInput[]) => {
      this.events = response as Calendar[]; // Cast a Calendar[] si es necesario
      this.createCalendar();
    });
  }

  createCalendar() {
    this.calendarOptions.events = this.events;
  }

  openCreateEventModal(arg: any) {
    if (arg.start) {
      this.eventDate = arg.start.toISOString().split('T')[0];
    }
    this.modalService.open(this.createEventModal);
  }

  createEvent(modal: any) {
    if (this.eventName) {
      const newEvent: Calendar = {
        title: this.eventName,
        start: this.eventDate,
        end: this.eventDate, // Si deseas establecer una fecha de finalización
      };

      this._calendarService.addEvent(newEvent).subscribe(() => {
        this.toastr.success(
          `El evento ${newEvent.title} fue creado con éxito`,
          `Evento Registrado`
        );
        this.router.navigate(['/']);
        modal.close();
        this.eventName = '';
        this.eventDate = '';
      });
    }
  }
}
