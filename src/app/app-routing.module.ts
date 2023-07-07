import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleServiceComponent } from './component/schedule-service/schedule-service.component';
import { OneTimeScheduleComponent } from './component/schedule-service/one-time-schedule/one-time-schedule.component';
import { FlexibleScheduleComponent } from './component/schedule-service/flexible-schedule/flexible-schedule.component';
import { RecurringScheduleComponent } from './component/schedule-service/recurring-schedule/recurring-schedule.component';
import { ScheduleInformationComponent } from './component/schedule-information/schedule-information.component';

const routes: Routes = [
  {path:'schedule',component:ScheduleServiceComponent,children:[
    {path:'one-time',component:OneTimeScheduleComponent},
    {path:'flexible',component:FlexibleScheduleComponent},
    {path:'recurring',component:RecurringScheduleComponent},
  ]},
  {path:'schedule/information',component:ScheduleInformationComponent},
  { path: '',   redirectTo: '/schedule/recurring', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
