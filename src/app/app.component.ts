import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container_">
  <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-schedule-app';
}
