import { Component } from '@angular/core';
import{ FlopService } from './flop.service';``

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieflops';

  constructor(flopService: FlopService){

  }


}
