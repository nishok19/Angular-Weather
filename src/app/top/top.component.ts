import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  topListdata: any;
  topList: any;

  constructor(public http: ApiCallService) {
    this.http.topListData().subscribe((data) => {
      this.topListdata = data;
      this.topList = this.topListdata.list;
    });
  }

  ngOnInit(): void {}
}
