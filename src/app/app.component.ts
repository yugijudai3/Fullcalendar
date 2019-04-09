import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  title = 'testapp';
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarVisible = true;
  selectable = true;
  calendarEvents: EventInput[] = [
    {title:"Event Now", start:new Date()}
  ];

  toggleVisible(){
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends(){
    this.calendarWeekends = !this.calendarWeekends;
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
}
