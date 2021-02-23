import { Component } from '@angular/core';
import { Logger } from './global/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice-app (by jingyang'; // this is a class member

  constructor(private logger: Logger) {} // missing private keyword made DI fail

  firstEvent() {
    this.logger.log('first event fired!')
  }
}
