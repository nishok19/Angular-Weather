import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  topListdata: any;
  topList: any;
  carouselData: any;

  constructor(public http: ApiCallService) {
    //  topList
    // this.http.topListData().subscribe((data) => {
    //   this.topListdata = data;
    //   this.topList = this.topListdata.list;
    // });
    // carousel
    // this.http.carouselListData().subscribe((data: any) => {
    //   this.carouselData = data;
    //   console.log(this.carouselData);
    // });
  }

  ngOnInit(): void {}
}
