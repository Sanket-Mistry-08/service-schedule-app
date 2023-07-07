import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneTimeSchedule } from 'src/app/model/OneTimeSchedule.model';
import { DummyScheduleDataService } from 'src/app/service/dummy-schedule-data.service';

@Component({
  selector: 'app-one-time-schedule',
  templateUrl: './one-time-schedule.component.html',
  styleUrls: ['../schedule-form.css']
})
export class OneTimeScheduleComponent implements OnInit {

  datetime_value = 'T00:00' //default value for datatime-local input
  cur_date = new Date()
  OneTimeScheduleData!: OneTimeSchedule;

  constructor(private dataService: DummyScheduleDataService, private router: Router) { }

  ngOnInit(): void {
    this.datetime_value = this.cur_date.toISOString().slice(0, 10) + this.datetime_value
  }

  onSubmit(time: HTMLSelectElement, date: HTMLInputElement) {
    this.OneTimeScheduleData = new OneTimeSchedule(time.value, date.value);
    this.dataService.scheduleData.push(this.OneTimeScheduleData)  //save schedule data
    this.router.navigateByUrl('schedule/information')


  }

}
