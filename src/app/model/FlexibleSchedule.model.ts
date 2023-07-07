export class FlexibleSchedule{
    private type = 'flexible-schedule'
    constructor(public hours:string,public service_start_date:string,public time_slot:string[]){

    }
}