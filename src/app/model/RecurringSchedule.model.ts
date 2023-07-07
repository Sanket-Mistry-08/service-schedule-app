export class RecurringSchedule{
    private type = 'recurring-schedule'
    constructor(public hours:string,public recurrence:string,public service_start_date:string,public time_slot:string[]){

    }
}