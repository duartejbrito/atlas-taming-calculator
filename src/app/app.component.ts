import { AppService } from './services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlas-taming-calculator';

  constructor(appService: AppService) {
    appService.types().subscribe(result => {
      console.log(result);
    });
  }
}
