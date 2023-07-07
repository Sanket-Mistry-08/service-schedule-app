import { Component, OnInit } from '@angular/core';
import { DummyScheduleDataService } from 'src/app/service/dummy-schedule-data.service';

@Component({
  selector: 'app-schedule-information',
  templateUrl: './schedule-information.component.html',
  styleUrls: ['./schedule-information.component.css', '../schedule-service/schedule-form.css']
})
export class ScheduleInformationComponent implements OnInit {
  data !: any
  
  constructor(private ds: DummyScheduleDataService) {
  }

  ngOnInit(): void {
    this.data = this.ds.getScheduleData()
  }

  onChange(el: HTMLSelectElement) {
    console.log(el.value)
    if (el.value == 'all') {
      this.data = this.ds.getScheduleData()
    } else {
      this.data = this.ds.getScheduleData().filter(item => item.type == el.value)
    }
  }
}
