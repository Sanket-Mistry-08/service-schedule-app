import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleServiceComponent } from './component/schedule-service/schedule-service.component';
import { RecurringScheduleComponent } from './component/schedule-service/recurring-schedule/recurring-schedule.component';
import { OneTimeScheduleComponent } from './component/schedule-service/one-time-schedule/one-time-schedule.component';
import { FlexibleScheduleComponent } from './component/schedule-service/flexible-schedule/flexible-schedule.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomRadio } from './directive/custom-radio.directive';
import { ScheduleInformationComponent } from './component/schedule-information/schedule-information.component';
import { SimpleRadio } from './directive/simple-radio.directive';
@NgModule({
  declarations: [
    AppComponent,
    ScheduleServiceComponent,
    RecurringScheduleComponent,
    OneTimeScheduleComponent,
    FlexibleScheduleComponent,
    CustomRadio,
    ScheduleInformationComponent,
    SimpleRadio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
