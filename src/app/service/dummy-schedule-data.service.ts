import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Store of schedule-data
export class DummyScheduleDataService {
  public scheduleData:any[]=[]

  getScheduleData(){
    return this.scheduleData;
  }
  constructor() { }
}

