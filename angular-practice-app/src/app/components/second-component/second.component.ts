import { Component } from '@angular/core';
import { Logger } from 'src/app/global/logger.service';
import { Ageify } from './ageify.service';

@Component({
  selector: 'second-component',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  title = 'a second component enters the fray'; // this is a class member

  constructor(
    private logger: Logger,
    private ageifyService: Ageify  
  ) {} // missing private keyword made DI fail

  secondEvent() {
    this.ageifyService.getAgeForName('testName').subscribe(resp => {
      this.logger.log(resp)
    })
  }
}
