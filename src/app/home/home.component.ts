import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myBalance: number = 100;
  myName: string = 'Venaktesh';
  myBirthday = Date();
  myText: string = 'I am form bangalore';
}
