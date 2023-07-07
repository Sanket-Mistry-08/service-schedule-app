import { Component, OnInit } from '@angular/core';
import { RecurringSchedule } from 'src/app/model/RecurringSchedule.model';
import { DummyScheduleDataService } from 'src/app/service/dummy-schedule-data.service';
import { ScheduleServiceComponent } from '../schedule-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurring-schedule',
  templateUrl: './recurring-schedule.component.html',
  styleUrls: ['../schedule-form.css']
})
export class RecurringScheduleComponent implements OnInit {

  // datetime_value_format='2020-03-01T00:00'
  timeSlot: string[] = []
  timeSlotError = false
  datetimeValue = 'T00:00'
  cur_date = new Date()
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  dayPeriod = ['Morning', 'Afternoon', 'Evening', 'Night']
  recurringScheduleData!: RecurringSchedule;

  constructor(private dataService: DummyScheduleDataService, private router: Router) { }

  ngOnInit(): void {
    this.datetimeValue = this.cur_date.toISOString().slice(0, 10) + this.datetimeValue //default value for datatime-local input
  }

  onClick(event: any) {
    this.timeSlotError = false
  }

  onSubmit(time: HTMLSelectElement, recurrence: HTMLSelectElement, date: HTMLInputElement) {
    let active_radio_buttons = document.querySelectorAll('.custom-radio.active')
    if (active_radio_buttons.length == 0) {
      this.timeSlotError = true
    } else {
      active_radio_buttons.forEach(el =>
        this.timeSlot.push(el.innerHTML)
      )
      this.recurringScheduleData = new RecurringSchedule(time.value, recurrence.value, date.value, this.timeSlot);
      this.dataService.scheduleData.push(this.recurringScheduleData)
      this.router.navigateByUrl('schedule/information')
    }
  }
}
