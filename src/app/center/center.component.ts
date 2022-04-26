import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  carouselData: any;

  constructor(public http: ApiCallService) {
    this.http.carouselListData().subscribe((data: any) => {
      this.carouselData = data;
      // console.log(this.carouselData);
    });
  }
  ngOnInit(): void {}
}
