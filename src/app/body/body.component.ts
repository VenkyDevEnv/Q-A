import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  data: any = [];
  constructor(private service: GetDataService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.data.map((item) => {
      this.data.push(item);
      console.log(this.data);
    });
  }
}
