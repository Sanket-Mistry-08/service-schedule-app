import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexibleSchedule } from 'src/app/model/FlexibleSchedule.model';
import { DummyScheduleDataService } from 'src/app/service/dummy-schedule-data.service';
import { TestHttpService } from 'src/app/service/test-http.service';

@Component({
  selector: 'app-flexible-schedule',
  templateUrl: './flexible-schedule.component.html',
  styleUrls: [ '../schedule-form.css']
})
export class FlexibleScheduleComponent implements OnInit {

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  dayPeriod = ['Morning', 'Afternoon', 'Evening', 'Night']
  timeSlot: string[] = []
  timeSlotError = false
  datetime_value = 'T00:00'
  cur_date = new Date()
  flexibleScheduleData!: FlexibleSchedule;

  constructor(private dataService: DummyScheduleDataService, private router: Router) { }

  ngOnInit(): void {
    this.datetime_value = this.cur_date.toISOString().slice(0, 10) + this.datetime_value //default value for datatime-local input
  }

  onClick(event: any) {
    this.timeSlotError = false
  }

  onSubmit(time: HTMLSelectElement, date: HTMLInputElement) {
    let active_radio_buttons = document.querySelectorAll('.custom-radio.active')
    if (active_radio_buttons.length == 0) {
      // error handling for radio button
      this.timeSlotError = true
    } else {
      active_radio_buttons.forEach(el =>
        this.timeSlot.push(el.innerHTML)
      )
      this.flexibleScheduleData = new FlexibleSchedule(time.value, date.value, this.timeSlot); //save schedule data
      this.dataService.scheduleData.push(this.flexibleScheduleData)
      this.router.navigateByUrl('schedule/information')
    }

  }
}
